/* eslint-env node */
/* eslint no-process-env: 0 */
import {relative} from 'path';
import {existsSync, mkdirSync} from 'fs';


const {stdout} = process;

export const pkgDir = './build/pkg';

export const handleErr = (err)=> {
  if (err) {
    stdout.write('\n');
    throw err;
  }
};

export const pkgRelative = (dir, file)=> (
  relative(dir, file)
    .replace(/\\/g, '/')
);

export const mkdir = (dir)=> {
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }
};
