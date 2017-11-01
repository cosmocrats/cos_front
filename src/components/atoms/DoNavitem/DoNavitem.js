import React from 'react';
import styles from './DoNavitem.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

const DoNavitem = ({children, to}) => {
  if(to) {
    return (
      <NavLink className={cx('nav-item')} activeStyle={{ opacity: 1, fontWeight: '600'}} to={to}>{children}</NavLink>
    )
  }
  return (
    <div className={cx('nav-item')}>
      {children}
    </div>
  );
};

export default DoNavitem;