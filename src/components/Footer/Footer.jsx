import React from "react";
import { BsInstagram } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li className="copyright">
          <a href="/">&copy; 2021 Dark Points Network LTD</a>
        </li>
        <li className="list">
          <a href="/">Credits</a>
        </li>
        <li className="list">
          <a href="/">Legals</a>
        </li>
      </ul>
      <BsInstagram style={({ size: "20" }, { paddingTop: "14px" })} />
    </div>
  );
};

export default Footer;
