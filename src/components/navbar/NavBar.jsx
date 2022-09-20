import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faAngleDoubleLeft,
  faHouse,
  faCartArrowDown,
  faCameraRetro,
  faCamera,
} from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/navbar/NavBar.scss';
import Footer from './Footer';

const NavBar = () => {
  const [open, setOpen] = useState(true);

  const menu = [
    { title: 'Home', icon: faHouse, href: '/home' },
    { title: 'Movies', icon: faCameraRetro, href: '/movies' },
    { title: 'Add Movie', icon: faCamera, href: '/movies/create' },
    { title: 'My Reservation', icon: faCartArrowDown, href: '/my-reservation' },
  ];
  return (
    <div>
      <header className="flex fixed z-10">
        <nav
          className={`${open ? 'w-72' : 'w-20'} 
        h-screen p-5 pt-8 bg-lime-500 duration-300 z-1 relative`}
        >
          <FontAwesomeIcon
            icon={faAngleDoubleLeft}
            className={`bg-[#fff] rounded-full -right-3 border-dark-purple 
            absolute cursor-pointer top-9 w-7 border-2 ${
              !open && 'rotate-[180]'
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <FontAwesomeIcon
              icon={faCamera}
              className={`bg-[#fff] p-2 cursor-pointer duration-500
              ${open && 'rotate-[360deg]'}`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-300
            ${!open && 'scale-0'}`}
            >
              Movies
            </h1>
          </div>
          <ul className="p-7 font-semibold flex-1 h-screen">
            {menu.map((menu) => (
              <li
                key={uuidv4()}
                className={`${
                  open && 'hover:bg-light-white hover:text-white rounded-md'
                } hover:opacity-[0.5] hover:text-white text-gray-300 text-sm flex pb-7 items-center gap-x-4 p-2 pl-0`}
              >
                <Link to={menu.href}>
                  <FontAwesomeIcon
                    icon={menu.icon}
                    alt="Icon"
                    className="pl-0"
                  />
                </Link>
                <Link
                  to={menu.href}
                  className={`${
                    !open && 'hidden'
                  } origin-left duration-300 text-[16px]  `}
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={`${!open && 'hidden'} absolute bottom-[0]`}>
          <Footer />
        </div>
      </header>
    </div>
  );
};
export default NavBar;
