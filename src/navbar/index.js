import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
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
import favicon from '../favicon.png';
import './theme.scss';


// TODO
const isAuthenticated = ()=> false;


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsedMenuOpen: false,
      dropdownOpen: {
        user: false,
        tenants: false,
        landlords: false,
        agents: false
      }
    };
  }

  toggleCollapsedMenu() {
    this.setState({collapsedMenuOpen: !this.state.collapsedMenuOpen});
  }

  onMouseEnter(id) {
    this.setState({
      dropdownOpen: {
        ...this.state.dropdown,
        [id]: true
      }
    });
  }

  onMouseLeave(id) {
    this.setState({
      dropdownOpen: {
        ...this.state.dropdown,
        [id]: false
      }
    });
  }

  // eslint-disable-next-line
  render() {
    const {isLoggingIn, landing} = this.props;

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
               LeaseGenius
            </NavbarBrand>
            <NavbarToggler
              className='navBar-toggler'
              onClick={()=> this.toggleCollapsedMenu()}
            />
            <Collapse isOpen={this.state.collapsedMenuOpen} navbar>
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
                    onMouseEnter={()=> this.onMouseEnter('user')}
                    onMouseLeave={()=> this.onMouseLeave('user')}
                    toggle={()=> null}
                    isOpen={this.state.dropdownOpen.user}
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
                    onMouseEnter={()=> this.onMouseEnter('tenants')}
                    onMouseLeave={()=> this.onMouseLeave('tenants')}
                    toggle={()=> null}
                    isOpen={this.state.dropdownOpen.tenants}
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
                    onMouseEnter={()=> this.onMouseEnter('landlords')}
                    onMouseLeave={()=> this.onMouseLeave('landlords')}
                    toggle={()=> null}
                    isOpen={this.state.dropdownOpen.landlords}
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
                    onMouseEnter={()=> this.onMouseEnter('agents')}
                    onMouseLeave={()=> this.onMouseLeave('agents')}
                    toggle={()=> null}
                    isOpen={this.state.dropdownOpen.agents}
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
                        href='/signin'
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
  isLoggingIn: PropTypes.bool
};

export default NavBar;
