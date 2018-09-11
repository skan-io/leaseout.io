import React from 'react';
import SearchIcon from 'rambler-ui/icons/forms/SearchIcon';
import {ServiceSearch} from 'rambler-ui/ComplexSearch';
import {H1} from 'rambler-ui/Typography';
import Navigators from './navigators';
import theme from './theme.css';


class NavBar extends React.Component {
  renderHint() {
    return (
      <div className='hint'>
        For Example, <a href>This link</a>
      </div>
    );
  }

  render() {
    return (
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
            value={null}
            onSearch={()=> null}
            onSelectItem={()=> null}
            onClickItem={()=> null}
            hint={this.renderHint()}
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
      </nav>
    );
  }
}


export default NavBar;
