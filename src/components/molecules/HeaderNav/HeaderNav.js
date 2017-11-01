import React from 'react';
import styles from './HeaderNav.scss';
import classNames from 'classnames/bind';
import { FlexBox, NavItem } from 'components';

const cx = classNames.bind(styles);

const HeaderNav = () => {
  return (
    <FlexBox row
      className={cx('header-nav')}>
      <NavItem to="/AicPage">
        Ai course
      </NavItem>
      <NavItem to="/PracticePage">
        CORE course
      </NavItem>
      <NavItem to="/StarPage">
        Star Major Company Course
      </NavItem>
    </FlexBox>
  );
};

export default HeaderNav;