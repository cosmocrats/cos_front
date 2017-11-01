import React from 'react';
import styles from './DoHeaderNav.scss';
import classNames from 'classnames/bind';
import { FlexBox, DoNavitem } from 'components';

const cx = classNames.bind(styles);

const DoHeaderNav = () => {
  return (
    <FlexBox row
      className={cx('header-nav')}>
      <DoNavitem to="/AicPage">
        Ai course
      </DoNavitem>
      <DoNavitem to="/PracticePage">
        CORE course
      </DoNavitem>
      <DoNavitem to="/StarPage">
        Star Major Company Course
      </DoNavitem>
    </FlexBox>
  );
};

export default DoHeaderNav;