import React from 'react';
import cx from 'classnames';
import device from './device.css';
import theme from './theme.css';

const Iphone8 = ()=> (
  <div
    className={
      cx(
        device.marvelDevice, device.iphone8, device.silver, theme.customPhone
      )
    }
  >
    <div className={device.topBar}></div>
    <div className={device.sleep}></div>
    <div className={device.volume}></div>
    <div className={cx(device.camera, theme.customPhoneCamera)}></div>
    <div className={cx(device.sensor, theme.customPhoneSensor)}></div>
    <div className={cx(device.speaker, theme.customPhoneSpeaker)}></div>
    <div className={cx(device.screen, theme.customPhoneScreen)}>
    </div>
    <div className={device.bottomBar}></div>
  </div>
);

export default Iphone8;
