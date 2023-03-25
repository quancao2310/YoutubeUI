import React from "react";
import { RxTextAlignJustify } from "react-icons/rx"
import { SlMagnifier, SlCamrecorder } from "react-icons/sl"
import { BsFillMicFill, BsBell } from "react-icons/bs"
import youtubeLogo from "../../img/youtube.png"
import avatar from "../../img/avatar.png"
import "../../css/Header.css"

function Header() {
  return (
    <header className="master-header">
      <div className="left-header">
        <RxTextAlignJustify size="2em" style={{cursor: "pointer"}} />
        <img
          src={youtubeLogo}
          alt="YouTube Icon"
          className="logo" 
        />
        <h2>Youtube</h2>
      </div>
      <div className="middle-header">
        <input type="text" placeholder="Search" className="search-bar" />
        <div className="search-icon">
          <SlMagnifier size="20px" style={{cursor: "pointer"}} />
        </div>
        <BsFillMicFill size="20px" style={{cursor: "pointer"}} />
      </div>
      <div className="right-header">
        <SlCamrecorder size="20px" style={{cursor: "pointer"}} />
        <BsBell size="20px" style={{cursor: "pointer"}} />
        <img
          src={avatar}
          alt="Avatar"
          className="avatar"
        />
      </div>
    </header>
  );
}

export default Header;