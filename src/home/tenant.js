import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Header, List, Button, Icon} from 'semantic-ui-react';
import theme from './theme.css';


const Tenant = ({mobile})=> (
  <Grid.Column
    className={mobile ? theme.bottomColumnMobile : theme.bottomColumn}
    style={{textAlign: 'center'}}
  >
    <Header
      as='h3'
      style={{fontSize: '2em'}}
      color='blue'
    >
      <Icon name='user' size='large' color='blue' />
      TENANTS
    </Header>
    <p className={theme.listHeader}>
      All in one place. No messy paper trails.
    </p>
    <List className={theme.listStyle}>
      <List.Item>
        <List.Content>
          <List.Header as='a' className={theme.listItem}>
            <b style={{color: '#15e000'}}>✔</b>
             &nbsp;&nbsp; Condition Report
          </List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header as='a' className={theme.listItem}>
            <b style={{color: '#15e000'}}>✔</b>
              &nbsp;&nbsp; Bill Splitter
          </List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header as='a' className={theme.listItem}>
            <b style={{color: '#15e000'}}>✔</b>
             &nbsp;&nbsp; Rent Tracker
          </List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header as='a' className={theme.listItem}>
            <b style={{color: '#15e000'}}>✔</b>
             &nbsp;&nbsp; Damage and Repairs Form
          </List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header as='a' className={theme.listItem}>
            <b style={{color: '#15e000'}}>✔</b>
             &nbsp;&nbsp; Push and SMS Notifications
          </List.Header>
        </List.Content>
      </List.Item>
    </List>
    <br />
    <Button icon labelPosition='right' className={theme.listButton}>
      <Icon name='right arrow' />
      More features for tenants
    </Button>
  </Grid.Column>
);
Tenant.propTypes = {
  mobile: PropTypes.bool
};


export default Tenant;
