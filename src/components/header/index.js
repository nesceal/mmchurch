import React, { useState } from 'react';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';
import Scrollspy from 'react-scrollspy';

const Header = ({ data }) => {
  const styles = styleSheet();
  const ids = ['about', 'history', 'events', 'beliefs', 'teachings', 'contact'];
  const [showMenuItems, setShowMenuItems] = useState(false);

  const handleHamburgerMenuClick = () => {
    setShowMenuItems(!showMenuItems);
  };

  return (
    <nav className={css(styles.nav)}>
      <label
        htmlFor="hamburger"
        className={css(styles.hamburgerLabel)}
        onClick={() => {
          handleHamburgerMenuClick();
        }}
      >
        &#9776;
      </label>
      <input type="checkbox" id="hamburger" className={css(styles.hamburger)} />
      <img src="logo.png" alt="The Eye" className={css(styles.logo)}></img>

      <Scrollspy
        items={ids}
        className={css(styles.list)}
        currentClassName={css(styles.active)}
        offset={-400}
      >
        {ids.map((id, index) => {
          return (
            <li
              key={index}
              className={css(
                styles.item,
                showMenuItems && styles.showMenuItems,
                index === 2 && styles.firstHalfRightMargin,
                index === 3 && styles.lastHalfRightMargin
              )}
            >
              <a href={`#${id}`} className={css(styles.label)}>
                {data[id].header}
              </a>
            </li>
          );
        })}
        <li className={css(styles.logoContainer)}></li>
      </Scrollspy>
    </nav>
  );
};

export default Header;
