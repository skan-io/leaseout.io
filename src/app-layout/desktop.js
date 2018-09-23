import React from 'react';
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility
} from 'semantic-ui-react';
import Routes from '../app/routes';
import Footer from './footer';
import theme from './theme.css';


const DesktopApp = ()=> (
  <Responsive minWidth={Responsive.onlyTablet.minWidth} className={theme.main}>
    <Visibility
      once={false}
      onBottomPassed={()=> null /* TODO map dispatch to props visibility */}
      onBottomPassedReverse={()=> null}
      className={theme.main}
    >
      <Segment
        inverted
        style={{minHeight: 700, padding: '1em 0em'}}
        vertical
        className={theme.mainSegment}
      >
        <Routes />
        <Menu
          fixed={'top'}
          inverted={true}
          pointing={true}
          secondary={true}
          size='large'
          className={theme.navContainer}
        >
          <Container>
            <Menu.Item as='a' active>Home</Menu.Item>
            <Menu.Item as='a'>Properties</Menu.Item>
            <Menu.Item as='a'>Assets</Menu.Item>
            <Menu.Item as='a'>Reports</Menu.Item>
            <Menu.Item position='right'>
              <Button as='a' inverted={true}>
                Log in
              </Button>
              <Button
                as='a'
                inverted={true}
                primary={false}
                style={{marginLeft: '0.5em'}}
              >
                Sign Up
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
      </Segment>
    </Visibility>
    <Footer />
  </Responsive>
);

export default DesktopApp;
