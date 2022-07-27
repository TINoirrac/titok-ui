import React from "react";
import PropsTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./accountitem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "../Images/Image";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
const AccountItem = ({ data }) => {
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <Image
        className={cx("avatar")}
        src={data.avatar}
        alt={data.full_name}
      ></Image>
      <div className={cx("info")}>
        <h4 className={cx("usernames")}>
          <span>{data.nickname}</span>
          {data.tick && (
            <FontAwesomeIcon
              className={cx("check")}
              icon={faCheckCircle}
            ></FontAwesomeIcon>
          )}
        </h4>
        <span className={cx("name")}>{data.full_name}</span>
      </div>
    </Link>
  );
};

AccountItem.propTypes={
  data:PropsTypes.object.isRequired,
}

export default AccountItem;
