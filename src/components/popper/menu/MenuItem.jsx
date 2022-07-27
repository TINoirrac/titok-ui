import React from "react";
import classNames from "classnames/bind";
import styles from "./menu.module.scss";
import Button from "../../button/Button";

const cx = classNames.bind(styles);

const MenuItem = ({ data, onClick }) => {
  const classes=cx('menu-item',{separate:data.separate});
  return (
    <Button
      className={cx(classes)}
      leftIcon={data.icon}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
};

export default MenuItem;
