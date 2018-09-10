import React, {Fragment} from 'react';
import {
  RamblerHeadIcon, RamblerFinanceIcon,
  RamblerLoveIcon, RamblerLikesIcon
} from 'rambler-ui/icons/services';
import Button from 'rambler-ui/Button';
import theme from './theme.css';

const Navigators = ()=> (
  <Fragment>
    <li className={theme.item}>
      <Button
        type='primary'
        className={theme.button}
        icon={<RamblerLikesIcon />}
      >
      Home
      </Button>
    </li>
    <li className={theme.item}>
      <Button
        type='outline'
        className={theme.button}
        icon={<RamblerHeadIcon />}>
      Properties
      </Button>
    </li>
    <li className={theme.item}>
      <Button
        type='outline'
        className={theme.button}
        icon={<RamblerLoveIcon />}
      >
      Assets
      </Button>
    </li>
    <li className={theme.item}>
      <Button
        type='outline'
        className={theme.button}
        icon={<RamblerFinanceIcon />}
      >
      Reports
      </Button>
    </li>
  </Fragment>
);


export default Navigators;
