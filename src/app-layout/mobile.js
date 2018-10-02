import React from 'react';
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar
} from 'semantic-ui-react';
import Routes from '../routes';
import Footer from './footer';
import theme from './theme.css';


const MobileApp = ()=> (
  <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
    <Sidebar.Pushable>
      <Sidebar as={Menu} animation='uncover' inverted vertical visible={false}>
        <Menu.Item as='a' active>Home</Menu.Item>
        <Menu.Item as='a'>Tenants</Menu.Item>
        <Menu.Item as='a'>Landlords</Menu.Item>
        <Menu.Item as='a'>Pricing</Menu.Item>
        <Menu.Item as='a'>Log in</Menu.Item>
        <Menu.Item as='a'>Sign Up</Menu.Item>
      </Sidebar>

      {/* give pusher and segment z-index = -1 */}
      <Sidebar.Pusher
        dimmed={false}
        onClick={()=> null}
        style={{minHeight: '100vh', zIndex: '-1'}}
      >
        <Segment
          inverted
          style={{minHeight: 350, padding: '1em 0em', zIndex: '-1'}}
          vertical
          className={theme.mobileMainSegment}
        >
          <Container className={theme.mobileNavContainer}>
            <Menu
              inverted pointing secondary size='large'
              className={theme.mobileMenuContainer}
            >
              <Menu.Item onClick={()=> null}>
                <Icon name='sidebar' />
              </Menu.Item>
              <Menu.Item className={theme.mobileBrand}>
                <img src='favicon.png' style={{width: '45px'}} />
              </Menu.Item>
              <Menu.Item position='right'>
                <Button as='a' inverted>Log in</Button>
                <Button as='a' inverted style={{marginLeft: '0.5em'}}>
                  Sign Up
                </Button>
              </Menu.Item>
            </Menu>
          </Container>
          <Routes />
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
    <Footer />
  </Responsive>
);

export default MobileApp;
