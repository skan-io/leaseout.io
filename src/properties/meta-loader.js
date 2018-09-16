import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ChangeHandler from '../change-handler';
import {fetchPropertyData} from './actions';


export const MetaLoader = ({propertyChangeKey, user, fetchPropertyMetaData})=> (
  <ChangeHandler
    infoKey={`${propertyChangeKey}:${user.sub}`}
    onChange={()=> fetchPropertyMetaData(user)}
    fireChangeOnMount={true}
  />
);
MetaLoader.propTypes = {
  propertyChangeKey: PropTypes.string,
  user: PropTypes.object,
  fetchPropertyMetaData: PropTypes.func
};


const mapStateToProps = ({properties, oidc})=> ({
  propertyChangeKey: properties.changeKey,
  user: oidc
});
const mapDispatchToProps = (dispatch)=> ({
  fetchPropertyMetaData: (user)=> {
    dispatch(fetchPropertyData(user));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MetaLoader);
