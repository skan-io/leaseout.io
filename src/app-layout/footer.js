import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  Container,
  Grid,
  Header,
  List,
  Segment
} from 'semantic-ui-react';
import {isMobile} from '../devices/utils';
import theme from './theme.css';


const Footer = ({mobile})=> (
  <Segment
    inverted vertical style={{padding: '5em 0em'}}
    className={mobile ? theme.mainFooterMobile : theme.mainFooter}
  >
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='About' />
            <List link inverted>
              <List.Item as='a'>About Us</List.Item>
              <List.Item as='a'>Contact Us</List.Item>
              <List.Item as='a'>Tenants</List.Item>
              <List.Item as='a'>Landlords</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Services' />
            <List link inverted>
              <List.Item as='a'>FAQ</List.Item>
              <List.Item as='a'>Tutorial Videos </List.Item>
              <List.Item as='a'>Sign Up</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as='h4' inverted>
              <img src='favicon.png' style={{width: '45px'}} />
              LeasePlease
            </Header>
            <p>
              The best way to keep your lease in check.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);
Footer.propTypes = {
  mobile: PropTypes.bool
};


const mapStateToProps = ({browser})=> ({
  mobile: isMobile(browser)
});


export default connect(mapStateToProps)(Footer);
