import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Signout from './Signout';

const Footer = () => (
  <footer className="footer">
    <div>
      <Link to="/">
        {' '}
        <Signout />
      </Link>
      <ul className="flex gap-5 m-auto w-[50%]">
        <li className="bg-[#00] text-[#fff]">
          <a href="/">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </li>
        <li className="bg-[#00] text-[#fff]">
          <a href="/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className="bg-[#00] text-[#fff]">
          <a href="/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="bg-[#00] text-[#fff]">
          <a href="/">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className="bg-[#00] text-[#fff]">
          <a href="/">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </li>
      </ul>
      <div className="text-center w-[100%] text-[#fff] my-5 px-5">
        <div className="w-[100%]">
          <p>© 2022 Kingsley, Amadu, Busiwa. All rights reserved.</p>
        </div>
        <div className="flex gap-4 m-auto underline w-[90%] mt-5">
          <a href="/">Privacy policy</a>
          <a href="/">Terms of use</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
