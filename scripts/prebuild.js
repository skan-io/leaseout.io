import {writeFileSync} from 'fs';
import {join} from 'path';
import {mkdir} from './utils';
// import {reserve} from './reserve-env';

const SHORT_SHA_LEN = 7;


const getNodeEnv = ({env})=> (
  // Code minification, optimization, the generation of sourcemaps
  // as well as extra debug information in react can be controlled
  // with the NODE_ENV environment variable.
  // The build scripts will always default to 'production' unless we are
  // running with --deploy-env=localhost in which case it is 'webpack-dev'
  // (used for npm start).
  //
  // This can be explicity overwritten by using:
  // `NODE_ENV=production npm run ...`
  // or by using a command line arg:
  // `npm run [...] --node-env=webpack-dev`
  env.NODE_ENV
  || env.npm_config_node_env
  || (env.npm_config_deploy_env === 'localhost' ? 'webpack-dev' : 'production')
);


const getBuildCommit = ({env})=> {
  const gitHead = env.npm_package_gitHead;
  const buildCommitParam = env.npm_config_build_commit;

  if (gitHead && (buildCommitParam === 'auto')) {
    const now = (new Date())
      .toISOString()
      .replace(/[-:.TZ]/g, '');
    // must be set for builds if npm can't figure out the commit SHA"
    // e.g. `npm run --build-commit=<SHA> [webpack | build]`
    return `dev-${gitHead.slice(0, SHORT_SHA_LEN)}-${now}`;
  }

  return buildCommitParam || gitHead;
};


const getDeploymentEnv = async ({env} /* , commit */)=> {
  const deployEnv = env.npm_config_deploy_env || 'www.leazy.io';

  if (deployEnv === 'auto') {
    // const token = env.npm_config_github_token;
    // const envKey = await reserve(commit, token);
    return {deployEnv: `www.leazy.com`, deployPath: 'manage'};
  }

  return {deployEnv, deployPath: 'manage'};
};


const main = async (process)=> {
  // we want to fail the process when async calls fail.
  process.on('unhandledRejection', (err)=> {
    throw err;
  });

  const buildDir = 'build';
  const confifgPath = join(buildDir, 'config.json');

  const buildCommit = getBuildCommit(process);
  const {deployEnv, deployPath} = await getDeploymentEnv(process, buildCommit);

  const data = JSON.stringify({
    version: buildCommit,
    nodeEnv: getNodeEnv(process),
    deployEnv,
    deployPath,
    deployUrl: `https://${deployEnv}/${deployPath}/`,
    artifactPath: `.pkg/${deployPath}/${buildCommit}`
  }, null, 2);

  mkdir(buildDir);
  writeFileSync(confifgPath, data);

  // eslint-disable-next-line no-console
  console.log(`generated ${confifgPath}:\n${data}`);
};

main(process);
