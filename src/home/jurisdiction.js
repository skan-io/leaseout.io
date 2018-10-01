import React from 'react';
import {Grid, Image} from 'semantic-ui-react';
import nsw from './nsw.png';
import vic from './vic.png';
import qld from './qld.png';
import sa from './sa.png';
import theme from './theme.css';

const Jurisdiction = ()=> (
  <Grid.Row columns={4}>
    <Grid.Column>
      <Image className={theme.nswImage} src={nsw} size='small' />
    </Grid.Column>
    <Grid.Column>
      <Image
        className={theme.qldImage}
        style={{textAlign: 'center'}}
        src={qld} size='small'
      />
    </Grid.Column>
    <Grid.Column>
      <Image
        className={theme.vicImage}
        style={{textAlign: 'center'}}
        src={vic} size='small'
      />
    </Grid.Column>
    <Grid.Column>
      <Image
        className={theme.saImage}
        src={sa} size='small'
      />
    </Grid.Column>
  </Grid.Row>
);


export default Jurisdiction;
