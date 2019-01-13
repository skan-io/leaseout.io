import {connect} from 'react-redux';
import Oidc from '../oidc-client';
import {getMapStateToProps} from '../oidc-client/redux/connect';
import {mapDispatchToProps} from '../oidc-client/redux/connect';
import {userLoaded} from '../oidc-client/redux/actions';
import {userSignin, userSignout} from '../user/actions';
import oidcConfig from '../oidc-config';
import {location} from '../globals';

const mapStateToProps = getMapStateToProps(oidcConfig, location);

const mapDispatch = (dispatch)=> ({
  ...mapDispatchToProps(dispatch),
  onUserLoaded: (...args)=> {
    dispatch(userLoaded(...args));
    dispatch(userSignin(...args));
  },
  onUserExpired: ()=> {
    dispatch(userSignout());
  },
  onUserUnloaded: ()=> {
    dispatch(userSignout());
  }
});

export default connect(mapStateToProps, mapDispatch)(Oidc);
