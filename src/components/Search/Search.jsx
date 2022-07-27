import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import PopperWrapper from "../../components/popper/Wrapper";
import AccountItem from "../../components/AccountItem/AccountItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./search.module.scss";
import { useRef } from "react";
import useDebounce from "../../hooks/useDebounce";
import { searchServices } from "../../services/searchServices";
import { SearchIcon } from "../../components/Icons/Icon";

const cx = classNames.bind(styles);

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResults, setShowResults] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    //fetch API
    if (!searchValue.trim()) {
      setSearchResult([]);
      return;
    }

    setLoading(true);

    const fetchApi = async () => {
      setLoading(true);

      const results = await searchServices(debounced);
      setSearchResult(results);

      setLoading(false);
    };

    fetchApi();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounced]);

  const handleClear = () => {
    setSearchValue("");
    inputRef.current.focus();
    setSearchResult([]);
  };

  const handleHideResult = () => {
    setShowResults(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };
  return (
    //Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context. 
    <div>
      <HeadlessTippy
        interactive={true}
        appendTo={()=>document.body}
        visible={searchResult.length > 0 && showResults}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx("search-title")}>Accounts</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx("search")}>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Search accounts and videos"
            spellCheck={false}
            onChange={handleChange}
            onFocus={() => setShowResults(true)}
          />
          {!!searchValue && !loading && (
            <button className={cx("clear")} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {!!loading && (
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          )}
          <button
            className={cx("search-btn")}
            onMouseDown={(e) => {
              e.preventDefault();
            }}
          >
            <SearchIcon/>
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
};

export default Search;
