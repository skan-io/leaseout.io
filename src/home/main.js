import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Header, Icon, Button} from 'semantic-ui-react';
import theme from './theme.css';


const Main = ({mobile})=> (
  <Grid columns='equal' stackable className={theme.middleGrid}>
    <Grid.Row
      textAlign='center'
      className={mobile ? theme.middleRowMobile : theme.middleRow}
    >
      <Grid.Column
        className={
          mobile ? theme.middleColumnMobile : theme.middleColumn
        }
      >
        <Header as='h3' color='violet'>
          <Icon name='mobile alternate' size='large' color='violet' />
           WORKS ON ANY DEVICE
        </Header>
        <p className={mobile ? theme.middleParaMobile : theme.middlePara}>
          LeasePlease will work on mobile, desktop or laptop so you
          can access your lease profile any time!
        </p>
        <br />
        <br />
        <Header as='h3' color='violet'>
          <Icon name='cloud download' size='large' color='violet' />
           AVAILABLE ANYWHERE
        </Header>
        <p className={mobile ? theme.middleParaMobile : theme.middlePara}>
          We store all your leases and reports in the cloud
          so you can access it anywhere you might need it.
        </p>
        <br />
        <br />
        <Button icon labelPosition='right'>
          <Icon name='right arrow' />
          Discover how to use LeasePlease
        </Button>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
Main.propTypes = {
  mobile: PropTypes.bool
};


export default Main;
