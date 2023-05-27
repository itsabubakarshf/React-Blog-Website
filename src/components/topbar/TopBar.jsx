import React from "react";
import "./topbar.css";

const TopBar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i class="topIcon fa-brands fa-facebook"></i>
        <i class="topIcon fa-brands fa-twitter"></i>
        <i class="topIcon fa-brands fa-pinterest"></i>
        <i class="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
      <img className="topImg" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="profile picture" />
      <i class="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};
export default TopBar;
