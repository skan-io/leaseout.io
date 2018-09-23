import React from 'react';
import cx from 'classnames';
import device from './device.css';

const IphoneX = ()=> (
  <div className={cx(device.marvelDevice, device.iphoneX)}>
    <div className={device.notch}>
      <div className={device.camera}></div>
      <div className={device.speaker}></div>
    </div>
    <div className={device.topBar}></div>
    <div className={device.sleep}></div>
    <div className={device.bottomBar}></div>
    <div className={device.volume}></div>
    <div className={device.overflow}>
      <div className={cx(device.shadow, device.shadowTr)}></div>
      <div className={cx(device.shadow, device.shadowTl)}></div>
      <div className={cx(device.shadow, device.shadowBr)}></div>
      <div className={cx(device.shadow, device.shadowBl)}></div>
    </div>
    <div className={device.innerShadow}></div>
    <div className={device.screen}>
    </div>
  </div>
);

export default IphoneX;
