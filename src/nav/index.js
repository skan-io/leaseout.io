import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SearchIcon from 'rambler-ui/icons/forms/SearchIcon';
import {ServiceSearch} from 'rambler-ui/ComplexSearch';
import {H1} from 'rambler-ui/Typography';
import Navigators from './navigators';
import theme from './theme.css';


const NavBar = ({user})=> (
  <nav className={theme.nav}>
    <ul className={theme.horizontal}>
      <a className={theme.brandLink} href={'http://www.google.com.au'}>
        <H1 className={theme.brand}>L</H1>
      </a>
      <Navigators />
    </ul>
    <li className={theme.searchItem}>
      <ServiceSearch
        className={theme.search}
        placeholder="Start searching..."
        value={undefined}
        onSearch={()=> null}
        onSelectItem={()=> null}
        onClickItem={()=> null}
        bottomLinks={()=> null}
        onPressEnter={()=> null}
        searchButton="Search"
        searchButtonStyle={{minWidth: 125}}
        onSubmit={()=> null}
        inputLeftIcon={
          <SearchIcon />
        }
      >
      </ServiceSearch>
    </li>
    {/* {user.isLoggedIn && <NavLink to="/profile">Profile</NavLink>} */}
  </nav>
);
NavBar.propTypes = {
  user: PropTypes.object
};


const mapStateToProps = ({user})=> ({
  user
});


export default connect(mapStateToProps)(NavBar);
