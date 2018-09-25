import React from 'react';
import cx from 'classnames';
import device from './device.css';
import theme from './theme.css';

const Ipad = ()=> (
  <div
    className={
      cx(
        device.marvelDevice, device.ipad,
        device.silver, device.landscape, theme.customIpad
      )
    }
  >
    <div className={device.camera}></div>
    <div className={cx(device.screen, theme.customIpadScreen)}>
    </div>
  </div>
);

export default Ipad;
