import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Button = ({
  href,
  to,
  primary = false,
  outline = false,
  text = false,
  disabled = false,
  small = false,
  large = false,
  rounded = false,
  children,
  onClick,
  leftIcon,
  className,
  ...passProps
}) => {

  let Comp = "button";

  const _props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    //delete _props.onClick;
    Object.keys(_props).forEach((key) => {
      if (key.startsWith("on") && typeof _props[key] === "function") {
        delete _props[key];
      }
    });
  }

  if (to) {
    _props.to = to;
    Comp = Link;
  } else if (href) {
    _props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    [className]: className,
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
  });

  return (
    <Comp className={classes} {..._props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
    </Comp>
  );
};

Button.propTypes={
href:PropTypes.string,
to:PropTypes.string,
primary:PropTypes.bool,
outline:PropTypes.bool,
text:PropTypes.bool,
disabled:PropTypes.bool,
small:PropTypes.bool,
large:PropTypes.bool,
rounded:PropTypes.bool,
children:PropTypes.node.isRequired,
onClick:PropTypes.func,
leftIcon:PropTypes.node,
className:PropTypes.string,
}

export default Button;
