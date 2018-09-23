import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from './header';
import {isMobile} from '../devices/utils';
import IphoneX from '../devices/iphone-x';
import theme from './theme.css';


const Home = ({mobile})=> (
  <main className={mobile ? theme.mainHomeMobile : theme.mainHome}>
    <Header />
  </main>
);
Home.propTypes = {
  mobile: PropTypes.bool
};

const mapStateToProps = ({browser})=> ({
  mobile: isMobile(browser)
});

export default connect(mapStateToProps)(Home);
