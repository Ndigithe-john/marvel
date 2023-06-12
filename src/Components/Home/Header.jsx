import React from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="background">
        <div className="header">
          <div className="user_name">
            <div className="initial">JN</div>
            <p>John</p>
          </div>
          <img
            className="marvel-logo"
            src="https://seeklogo.com/images/M/Marvel_Comics-logo-D489AEB9C1-seeklogo.com.png"
            alt="marvel-img"
          />
          <div className="unlimited">
            <span>
              <p>MARVEL UNLIMITED </p>
              <span>SUBSCRIBE</span>
            </span>
            <div className="serchicon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
        </div>
        <div className="nav-items">
          <ul className="nav-links">
            <Link className="link-style" to="/Home/characters">
              <li>Characters</li>
            </Link>
            <Link className="link-style" to="/Home/comics">
              <li>Comics</li>
            </Link>
            <Link className="link-style" to="/Home/creators">
              <li>Creators</li>
            </Link>
            <Link className="link-style" to="/Home/events">
              <li>Events</li>
            </Link>
            <Link className="link-style" to="/Home/stories">
              <li>Stories</li>
            </Link>
            <Link className="link-style" to="/Home/series">
              <li>Series</li>
            </Link>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
