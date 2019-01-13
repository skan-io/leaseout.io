import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {focus} from 'refocus/actions';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import {setCollapsedMenuOpen} from './actions';
import {isAuthenticated} from '../auth';
import favicon from '../favicon.png';
import './theme.scss';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dropdownOpen: false};
  }

  onMouseEnter() {
    this.setState({dropdownOpen: true});
  }

  onMouseLeave() {
    this.setState({dropdownOpen: false});
  }

  render() {
    const {isLoggingIn, landing, isOpen, onToggleCollapsedMenu} = this.props;

    return (
      <Fragment>
        {!isLoggingIn &&
          <Navbar
            className={landing ? 'navBar-landing' : ''}
            light={!landing}
            dark={landing}
            expand="md"
          >
            <NavbarBrand
              className={landing ? 'navBar-landingBrand' : ''}
              href="/"
            >
              <img
                className={'navBar-brandImage'}
                src={favicon} width="30"
              />
               LeasePlease
            </NavbarBrand>
            <NavbarToggler onClick={()=> onToggleCollapsedMenu()} />
            <Collapse data-focus='collapsed-nav' isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {!landing && <NavLink href='/'>Home</NavLink>}
                <NavLink
                  className={landing ? 'navBar-landingLink' : ''}
                  href='/products'
                >
                Products
                </NavLink>
                {isAuthenticated()
                && (
                  <Dropdown
                    onMouseEnter={()=> this.onMouseEnter()}
                    onMouseLeave={()=> this.onMouseLeave()}
                    toggle={()=> null}
                    isOpen={this.state.dropdownOpen}
                    nav
                    inNavbar
                  >
                    <DropdownToggle
                      className={landing ? 'navBar-landingDropdown' : ''}
                      nav
                    >
                    Options
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem> Option 1 </DropdownItem>
                      <DropdownItem> Option 2 </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem> Reset </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                )}
                {!isAuthenticated()
                && (
                  <Dropdown
                    onMouseEnter={()=> this.onMouseEnter()}
                    onMouseLeave={()=> this.onMouseLeave()}
                    toggle={()=> null}
                    isOpen={this.state.dropdownOpen}
                    nav
                    inNavbar
                  >
                    <DropdownToggle
                      className={landing ? 'navBar-landingDropdown' : ''}
                      nav
                    >
                    Tenants
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem> Option 1 </DropdownItem>
                      <DropdownItem> Option 2 </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem> Reset </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                )}
                {!isAuthenticated()
                && (
                  <Dropdown
                    onMouseEnter={()=> this.onMouseEnter()}
                    onMouseLeave={()=> this.onMouseLeave()}
                    toggle={()=> null}
                    isOpen={false /* TODO */}
                    nav
                    inNavbar
                  >
                    <DropdownToggle
                      className={landing ? 'navBar-landingDropdown' : ''}
                      nav
                    >
                    Landlords
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem> Option 1 </DropdownItem>
                      <DropdownItem> Option 2 </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem> Reset </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                )}
                {!isAuthenticated()
                && (
                  <Dropdown
                    onMouseEnter={()=> this.onMouseEnter()}
                    onMouseLeave={()=> this.onMouseLeave()}
                    toggle={()=> null}
                    isOpen={false /* TODO */}
                    nav
                    inNavbar
                  >
                    <DropdownToggle
                      className={landing ? 'navBar-landingDropdown' : ''}
                      nav
                    >
                    Agents
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem> Option 1 </DropdownItem>
                      <DropdownItem> Option 2 </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem> Reset </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                )}
                <NavItem>
                  {isAuthenticated()
                    ? (
                      <NavLink
                        className={landing ? 'navBar-landingLink' : ''}
                        href='/logout'>Log Out
                      </NavLink>
                    )
                    : (
                      <NavLink
                        className={landing ? 'navBar-landingLink' : ''}
                        href='/login'
                      >
                      Sign In →
                      </NavLink>
                    )
                  }
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        }
      </Fragment>
    );
  }
}
NavBar.propTypes = {
  landing: PropTypes.bool,
  isOpen: PropTypes.bool,
  isLoggingIn: PropTypes.bool,
  onToggleCollapsedMenu: PropTypes.func
};

const mapStateToProps = ({navbar, auth})=> ({
  isOpen: navbar.isOpen,
  isLoggingIn: auth.requestLogin
});

const mapDispatchToProps = (dispatch)=> ({
  onToggleCollapsedMenu: ()=> {
    dispatch(setCollapsedMenuOpen());
    dispatch(focus('collapsed-nav'));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
