import React from "react";
import "../styles/navBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <p className="logo">CookBook</p>
        <div className="link-box">
          <p className="link">Search</p>
          <p className="link">Random</p>
          <p className="link">About Us</p>
        </div>
      </div>
    );
  }
}

export default NavBar;
