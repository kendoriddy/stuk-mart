import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import '../css/footer.css';

const Footer = () => (
  <footer>
    <div className="navbar">
      <h3>Stuk-Mart 2022 by RideOnOne</h3>
    </div>
    <ul className="d-flex">
      <li className="mx-2">
        <a
          href="https://github.com/kendoriddy/"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <FaGithub />
        </a>
      </li>
      <li className="mx-2">
        <a
          href="https://www.linkedin.com/in/kehindeonifade/"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <FaLinkedin />
        </a>
      </li>
      <li className="mx-2">
        <a
          href="https://twitter.com/rideonone09"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <FaTwitter />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
