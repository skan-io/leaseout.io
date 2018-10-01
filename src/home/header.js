import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button} from 'semantic-ui-react';
import Iphone8 from '../devices/iphone-8';
import Ipad from '../devices/ipad-landscape';
import {isMobile, isTablet} from '../devices/utils';
import theme from './theme.css';


const getThemeForResponsive = (mobile, tablet)=> {
  if (!mobile && !tablet) {
    return theme.iphoneContainer;
  }
  if (tablet) {
    return theme.iphoneContainerTablet;
  }
};

const Header = ({mobile, tablet})=> (
  <header>
    <div className={theme.stripes}>
      <span className={theme.firstStripe}></span>
      <span className={theme.secondStripe}></span>
      <span className={theme.thirdStripe}></span>
      <span className={theme.fourthStripe}></span>
      <span className={theme.fifthStripe}></span>
    </div>
    <section className={theme.intro}>
      <div className={mobile ? theme.introContentMobile : theme.introContent}>
        <h1 className={theme.introTitle}>
          The best way to keep your lease in check.
        </h1>
        <br></br>
        <p className={theme.introPara}>
          LeasePlease provides a free and easy service for tenants and landlords
           to keep track of condition reports, damaged assets, bills and rent.
           Keep timestamped evidence, compliant reports and simple
            payment records.
        </p>
        <Button
          className={theme.signUpButton}
          size='huge'
          as='a' inverted={false} color='violet'>
          Create Account
        </Button>
      </div>
      {!mobile &&
        <div className={getThemeForResponsive(mobile, tablet)}>
          <Iphone8 />
          <Ipad />
        </div>
      }
    </section>
  </header>
);
Header.propTypes = {
  mobile: PropTypes.bool,
  tablet: PropTypes.bool
};


const mapStateToProps = ({browser, device})=> ({
  mobile: isMobile(browser),
  tablet: isTablet(browser, device)
});


export default connect(mapStateToProps)(Header);
