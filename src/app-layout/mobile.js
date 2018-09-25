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
import Routes from '../app/routes';
import Footer from './footer';
import theme from './theme.css';


const MobileApp = ()=> (
  <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
    <Sidebar.Pushable>
      <Sidebar as={Menu} animation='uncover' inverted vertical visible={false}>
        <Menu.Item as='a' active>Home</Menu.Item>
        <Menu.Item as='a'>Properties</Menu.Item>
        <Menu.Item as='a'>Assets</Menu.Item>
        <Menu.Item as='a'>Reports</Menu.Item>
        <Menu.Item as='a'>Log in</Menu.Item>
        <Menu.Item as='a'>Sign Up</Menu.Item>
      </Sidebar>

      {/* give pusher and segment z-index = -1 */}
      <Sidebar.Pusher
        dimmed={false}
        onClick={()=> null}
        style={{minHeight: '100vh'}}
      >
        <Segment
          inverted
          style={{minHeight: 350, padding: '1em 0em'}}
          vertical
          className={theme.mobileMainSegment}
        >
          <Container>
            <Menu
              inverted pointing secondary size='large'
              className={theme.mobileNavContainer}
            >
              <Menu.Item onClick={()=> null}>
                <Icon name='sidebar' />
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
