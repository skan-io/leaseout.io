import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Segment, Grid, Header, Icon, Button, List} from 'semantic-ui-react';
import {isMobile, isTablet} from '../devices/utils';
import theme from './theme.css';


const HomeContent = ({mobile, tablet, browser})=> (
  <Fragment>
    <Segment
      className={theme.middleSegment}
      vertical
    >
      <Grid columns='equal' stackable className={theme.middleGrid}>
        <Grid.Row textAlign='center' className={theme.middleRow}>
          <Grid.Column
            className={
              mobile ? theme.middleColumnMobile : theme.middleColumn
            }
          >
            <Header as='h3' color='violet'>
              <Icon name='mobile alternate' size='large' color='violet' />
               WORKS ON ANY DEVICE
            </Header>
            <p className={theme.middlePara}>
              LeasePlease will work on mobile, desktop or laptop so you
              can access your lease profile any time!
            </p>
            <br />
            <br />
            <Header as='h3' color='violet'>
              <Icon name='cloud download' size='large' color='violet' />
               AVAILABLE ANYWHERE
            </Header>
            <p className={theme.middlePara}>
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
    </Segment>

    <section className={theme.greyMiddleSection} />

    <Segment
      className={theme.bottomSegment}
      vertical
    >
      <Grid columns='equal' stackable className={theme.bottomGrid}>
        <Grid.Row
          id='bottomHomeRow'
          textAlign='center'
          className={theme.bottomRow}
        >
          <Grid.Column className={theme.bottomColumn} style={{textAlign: 'center'}}>
            <Header as='h3' style={{fontSize: '2em'}} color='blue'>
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
                     &nbsp;&nbsp; Damage Assessment Form
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header as='a' className={theme.listItem}>
                    <b style={{color: '#15e000'}}>✔</b>
                     &nbsp;&nbsp; Tenant Rights Forum
                  </List.Header>
                </List.Content>
              </List.Item>
            </List>
            <br />
            <Button icon labelPosition='right'>
              <Icon name='right arrow' />
              More features for tenants
            </Button>
          </Grid.Column>
          <Grid.Column className={theme.bottomColumn} style={{textAlign: 'center'}}>
            <Header as='h3' style={{fontSize: '2em'}} color='blue'>
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
                     &nbsp;&nbsp; Damage Assessment Form
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header as='a' className={theme.listItem}>
                    <b style={{color: '#15e000'}}>✔</b>
                     &nbsp;&nbsp; Tenant Rights Forum
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
        </Grid.Row>
      </Grid>
    </Segment>

    <section className={theme.whiteBottomSection} />
  </Fragment>
);
HomeContent.propTypes = {
  mobile: PropTypes.bool,
  tablet: PropTypes.bool,
  browser: PropTypes.object
};


const mapStateToProps = ({browser, device})=> ({
  mobile: isMobile(browser),
  tablet: isTablet(browser, device),
  browser
});


export default connect(mapStateToProps)(HomeContent);
