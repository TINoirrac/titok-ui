import React, { forwardRef } from "react";
import { useState } from "react";
import images from "../../assets/images";
import styles from "./image.module.scss";
import classNames from "classnames/bind";

const Image = forwardRef(
  ({ src, alt, className, fallback = images.noImage, ...props }, ref) => {
    const [_fallback, setFallback] = useState("");
    const handleError = () => {
      setFallback(fallback);
    };
    return (
      <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={_fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  }
);

export default Image;
