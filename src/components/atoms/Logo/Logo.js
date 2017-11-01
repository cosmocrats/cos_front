import React from 'react';
import styles from './Logo.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import img from 'static/images/logo_white.png'

const cx = classNames.bind(styles);

const Logo = () => {
  return (
   
    <Link to="/" className={cx('logo')}>
     <img src={img} className={cx('logos')}/>
      <span className={cx('logos-text')}>
      Aiplatform
      </span>
    </Link>
  );
};

export default Logo;