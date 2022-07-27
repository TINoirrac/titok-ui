import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import styles from "./header.module.scss";
import classNames from "classnames/bind";
import images from "../../assets/images";
import Button from "../button/Button";
import Menu from "../popper/menu/Menu";
import {
  CoinsIcon,
  FeedbackIcon,
  InboxIcon,
  KeyboardIcon,
  MessageIcon,
  UploadIcon,
  UserIcon,
  SettingIcon,
  LanguageIcon,
} from "../Icons/Icon";
import Image from "../Images/Image";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import routesConfig from "../../config/routes";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <LanguageIcon/>,
    title: "English",
    children: {
      title: "Language",
      data: [
        { type: "language", code: "en", title: "English" },
        { type: "language", code: "vi", title: "Vietnamese" },
        { type: "language", code: "ko", title: "Korean" },
        { type: "language", code: "ja", title: "Japanese" },
        { type: "language", code: "fr", title: "France" },
      ],
    },
  },
  {
    icon: <FeedbackIcon />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <KeyboardIcon />,
    title: "Keybboard shortcuts",
  },
];
const userMenu = [
  {
    icon: <UserIcon />,
    title: "View profile",
  },
  {
    icon: <CoinsIcon />,
    title: "Get coins",
  },
  {
    icon: <SettingIcon />,
    title: "Settings",
    to: "/feedback",
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faArrowRightToBracket}></FontAwesomeIcon>,
    title: "Log out",
    separate: true,
  },
];
const handleMenuChange = (menuItem) => {
  switch (menuItem) {
    case "language":
      break;
    default:
  }
};
const Header = () => {
  const currentUser = true;
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <Link to={routesConfig.home} className={cx("logo-link")}>
            <img src={images.logo} alt="Tiktok"></img>
          </Link>
        </div>
        <Search />
        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy
                content="Upload Videos"
                placement="bottom"
                delay={[0, 200]}
              >
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <button className={cx("action-btn")}>
                <MessageIcon />
              </button>
              <button className={cx("action-btn")}>
                <InboxIcon />
              </button>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
            hideOnClick={false}
            className={cx("menu")}
          >
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3fda2cca3e9257c62e6fb3b8e9710184~c5_100x100.jpeg?x-expires=1658714400&x-signature=IJ8Tbsr6IVXASRQAGamIUaJFdUU%3D"
                alt="ndq"
              ></Image>
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
