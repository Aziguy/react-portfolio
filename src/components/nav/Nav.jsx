import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { LuHandshake } from "react-icons/lu";
import { PiCertificateFill } from "react-icons/pi";
import { BiSolidMessageSquareDetail } from "react-icons/bi";

import './nav.css';

const navItems = [
  { id: '#', icon: <FaHome />, label: 'Home' },
  { id: '#about', icon: <FaCircleUser />, label: 'About' },
  { id: '#experiences', icon: <MdOutlineWork />, label: 'Experiences' },
  { id: '#services', icon: <LuHandshake />, label: 'Services' },
  { id: '#certifications', icon: <PiCertificateFill />, label: 'Certification' },
  { id: '#contact', icon: <BiSolidMessageSquareDetail />, label: 'Contact' },
];

export const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      {navItems.map(({ id, icon, label }) => (
        <a
          key={id}
          href={id}
          onClick={() => setActiveNav(id)}
          className={activeNav === id ? 'active' : ''}
          aria-label={label}
        >
          {icon}
        </a>
      ))}
    </nav>
  );
};
