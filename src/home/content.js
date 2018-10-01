import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Segment, Grid, Header, Icon} from 'semantic-ui-react';
import {isMobile, isTablet} from '../devices/utils';
import Main from './main';
import Landlord from './landlord';
import Tenant from './tenant';
import Jurisdiction from './jurisdiction';
import theme from './theme.css';


const HomeContent = ({mobile})=> (
  <Fragment>
    <Segment
      className={theme.middleSegment}
      vertical
    >
      <Main mobile={mobile} />
    </Segment>

    <section className={theme.greyMiddleSection} />

    <Segment
      className={theme.bottomSegment}
      vertical
    >
      <Grid
        columns='equal'
        stackable
        className={mobile ? theme.bottomGridMobile : theme.bottomGrid}
      >
        <Grid.Row
          id='bottomHomeRow'
          textAlign='center'
          className={theme.bottomRow}
        >
          <Tenant />
          <Landlord />
        </Grid.Row>
      </Grid>
    </Segment>

    <section className={theme.whiteBottomSection} />

    <Segment vertical>
      <Grid className={theme.jurisdictionGrid}>
        <Header
          as='h3'
          className={theme.jurisdictionHead}
          color='violet'
        >
          <Icon name='list alternate outline' size='large' color='violet' />
          STATE CONDITION REPORTS
        </Header>
        <Jurisdiction />
      </Grid>
    </Segment>
    <Segment vertical className={theme.chartSegment}>
      <Header
        as='h3'
        className={theme.chartHead}
        color='violet'
      >
        <Icon name='chart line' size='large' color='violet' />
        INCOME AND COST CHARTS
      </Header>
    </Segment>
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
