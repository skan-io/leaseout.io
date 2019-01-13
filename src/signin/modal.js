import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {signin} from '../oidc-client/redux/actions';
import './theme.scss';

import favicon from '../favicon.png';


export const SigninModal = ({open, onSigninClick})=> (
  <Modal className={'signinModal'} isOpen={open}>
    <ModalHeader><img src={favicon} width="30" /> Sign In</ModalHeader>
    <ModalBody>
      Easily manage your lease documents, signatures, photos and more.
    </ModalBody>
    <ModalFooter>
      <Button color="secondary" onClick={onSigninClick}>Cancel</Button>
      <Button color="primary" onClick={onSigninClick}>Sign In</Button>
    </ModalFooter>
  </Modal>
);

SigninModal.propTypes = {
  open: PropTypes.bool,
  onSigninClick: PropTypes.func
};


const mapStateToProps = ({oidc, user})=> ({
  open: (oidc.pending && oidc.error !== null)
    || (!oidc.pending && oidc.expired && oidc.error !== null)
    || !user.signedIn
});

const mapDispatchToProps = (dispatch)=> ({
  onSigninClick: ()=> dispatch(signin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninModal);
