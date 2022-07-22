import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import './ThemeToggleButton.scss';

const ThemeToggleButton = ({buttonClassName}) => {
  return (
    <ThemeToggler>
      {({ toggleTheme }) => {
        const setDarkMode = () => toggleTheme('dark');
        const setLightMode = () => toggleTheme('light');
        return (
          <>
            <button className={`themeToggleButton lightModeOnly ${buttonClassName}`} onClick={setDarkMode}>
              <FontAwesomeIcon
                icon={faMoon}
                size="lg"
              />
            </button>
            <button className={`themeToggleButton darkModeOnly ${buttonClassName}`} onClick={setLightMode}>
              <FontAwesomeIcon
                icon={faSun}
                size="lg"
              />
            </button>
          </>
        );
      }}
    </ThemeToggler>
  );
};

export default ThemeToggleButton;
