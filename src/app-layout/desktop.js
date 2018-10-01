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
import {document} from '../globals';
import theme from './theme.css';


const setMaxWidth = ()=> {
  const container = document.getElementById('menuContainer');
  if (container) {
    container.setAttribute('style', 'max-width: 1000px !important');
  }
  const bottomHomeRow = document.getElementById('bottomHomeRow');
  if (bottomHomeRow) {
    bottomHomeRow.setAttribute(
      'style', 'width: 80% !important; max-width: 1000px !important'
    );
  }
};


class DesktopApp extends React.Component {

  // Work around to set max width on the navbar
  componentDidMount() {
    setMaxWidth();
  }

  componentDidUpdate() {
    setMaxWidth();
  }

  render() {
    return (
      <Responsive
        onUpdate={setMaxWidth}
        minWidth={Responsive.onlyTablet.minWidth}
        className={theme.main}
      >
        <Visibility
          once={false}
          onBottomPassed={()=> null /* TODO map dispatch to props visibility */}
          onBottomPassedReverse={()=> null}
          className={theme.main}
        >
          <Menu
            inverted={true}
            pointing={true}
            secondary={true}
            size='large'
            className={theme.navContainer}
          >
            <Container id='menuContainer' className={theme.menuContainer}>
              <Menu.Item className={theme.brand}>
                <img src='favicon.png' style={{width: '45px'}} />
              </Menu.Item>
              <Menu.Item as='a' active>Home</Menu.Item>
              <Menu.Item as='a'>Tenants</Menu.Item>
              <Menu.Item as='a'>Landlords</Menu.Item>
              <Menu.Item as='a'>Pricing</Menu.Item>
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
          <Segment
            inverted
            style={{minHeight: 700, padding: '1em 0em'}}
            vertical
            className={theme.mainSegment}
          >
            <Routes />
          </Segment>
          <Footer />
        </Visibility>
      </Responsive>
    );
  }
}

export default DesktopApp;
