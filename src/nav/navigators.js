import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import {
  RamblerHeadIcon, RamblerFinanceIcon,
  RamblerLoveIcon, RamblerLikesIcon
} from 'rambler-ui/icons/services';
import Button from 'rambler-ui/Button';
import {createLink} from '../utils/router';
import theme from './theme.css';


const Navigators = ()=> (
  <Fragment>
    <li className={theme.item}>
      <NavLink to={createLink('/')} exact={true}>
        <Button
          type='primary'
          className={theme.button}
          icon={<RamblerLikesIcon />}
        >
        Home
        </Button>
      </NavLink>
    </li>
    <li className={theme.item}>
      <NavLink to={createLink('/properties')}>
        <Button
          type='outline'
          className={theme.button}
          icon={<RamblerHeadIcon />}>
        Properties
        </Button>
      </NavLink>
    </li>
    <li className={theme.item}>
      <Button
        disabled
        type='outline'
        className={theme.button}
        icon={<RamblerLoveIcon />}
      >
      Assets
      </Button>
    </li>
    <li className={theme.item}>
      <Button
        disabled
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
