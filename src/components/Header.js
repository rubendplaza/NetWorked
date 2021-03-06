import React from "react";
import "./Header.css";

class Header extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    return (
      <nav className="navBar sticky">
        <ul className="main-nav">
          <li className="linkItem">
            <a href="https://www.google.com/" className="link appName">
              NetWorked
            </a>
          </li>
          <li className="linkItem push">
            <a href="https://www.google.com/" className="link">
              About
            </a>
          </li>
          <li className="linkItem">
            <a href="https://www.google.com/" className="link">
              Contact
            </a>
          </li>
          <li className="linkItem">
            <a href="https://www.google.com/" className="link">
              Team
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
