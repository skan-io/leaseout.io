import React from 'react';
import {Grid, Header, List, Button, Icon} from 'semantic-ui-react';
import theme from './theme.css';


const Landlord = ()=> (
  <Grid.Column
    className={theme.bottomColumn}
    style={{textAlign: 'center'}}
  >
    <Header
      as='h3'
      style={{fontSize: '2em'}}
      color='blue'
    >
      <Icon name='home' size='large' color='blue' />
      LANDLORDS
    </Header>
    <p className={theme.listHeader}>
      Everything a self-managed landlord needs.
    </p>
    <List className={theme.listStyle}>
      <List.Item>
        <List.Content>
          <List.Header as='a' className={theme.listItem}>
            <b style={{color: '#15e000'}}>✔</b>
             &nbsp;&nbsp; Asset Management
          </List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header as='a' className={theme.listItem}>
            <b style={{color: '#15e000'}}>✔</b>
              &nbsp;&nbsp; Income Tracking
          </List.Header>
        </List.Content>
      </List.Item>
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
             &nbsp;&nbsp; Rental Report
          </List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header as='a' className={theme.listItem}>
            <b style={{color: '#15e000'}}>✔</b>
             &nbsp;&nbsp; Automated Correspondence
          </List.Header>
        </List.Content>
      </List.Item>
    </List>
    <br />
    <Button icon labelPosition='right'>
      <Icon name='right arrow' />
      More features for landlords
    </Button>
  </Grid.Column>
);


export default Landlord;
