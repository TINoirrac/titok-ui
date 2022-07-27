import React from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import styles from './defaultlayout.module.scss'
import classNames from 'classnames/bind'

const cx=classNames.bind(styles)

const DefaultLayout = (props) => {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{props.children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
