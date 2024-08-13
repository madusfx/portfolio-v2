import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDarkMode } from 'react-icons/md';
import { BsFillLightbulbFill } from 'react-icons/bs';
import { MenuItem } from '../MenuItem';
import { SocialMedia } from '../SocialMedia';

import './style.css';

export function Header({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex items-center justify-between py-8 px-12 w-full">
      <div className="flex items-center gap-6">
        <h1 className="text-gradient text-2xl text-center">
          &#123;mariasundfeld&#125;
        </h1>
      </div>

      <div className="flex items-center">
        <button className="lg:hidden z-50" onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={menuOpen ? faTimes : faBars}
            size="2x"
            className="text-customPurple"
          />
        </button>

        <div className="hidden lg:flex flex-col items-center lg:flex-row gap-6 justify-center flex-grow">
          <MenuItem href="#" title="Home" />
          <MenuItem href="#about" title="About" />
          <MenuItem href="#" title="Tech Stack" />
          <MenuItem href="#" title="Projects" />
          <MenuItem href="#" title="Contact" />
          <SocialMedia />
        </div>

        {menuOpen && (
          <div
            className="fixed inset-0 bg-white dark:bg-slate-900 lg:hidden z-40"
            onClick={toggleMenu}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              <MenuItem href="#" title="Home" />
              <MenuItem href="#about" title="About" />
              <MenuItem href="#" title="Tech Stack" />
              <MenuItem href="#" title="Projects" />
              <MenuItem href="#" title="Contact" />
              <SocialMedia />
            </div>
          </div>
        )}

        <div className="ml-6">
          {theme === 'light' ? (
            <MdDarkMode
              onClick={() => setTheme('dark')}
              className="text-customPurple w-7 h-7 cursor-pointer"
            />
          ) : (
            <BsFillLightbulbFill
              className="text-customPurple w-7 h-7 cursor-pointer"
              onClick={() => setTheme('light')}
            />
          )}
        </div>
      </div>
    </header>
  );
}
