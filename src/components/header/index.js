import React, { useState } from 'react';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';

const Header = ({ data }) => {
  const styles = styleSheet();
  const { about, history, events, beliefs, contact } = data;
  const [selectedNavItem, setSelectedNavItem] = useState('');

  const handleNavItemClick = (navItem) => {
    setSelectedNavItem(navItem);
  };

  return (
    <nav className={css(styles.nav)}>
      <ul className={css(styles.list, styles.leftList)}>
        <li
          className={css(
            styles.listItem,
            selectedNavItem === 'about' && styles.active
          )}
        >
          <a
            href="#about"
            className={css(styles.label)}
            onClick={() => handleNavItemClick('about')}
          >
            {about.header}
          </a>
        </li>
        <li
          className={css(
            styles.listItem,
            selectedNavItem === 'history' && styles.active
          )}
        >
          <a
            href="#history"
            className={css(styles.label)}
            onClick={() => handleNavItemClick('history')}
          >
            {history.header}
          </a>
        </li>
        <li
          className={css(
            styles.listItem,
            styles.leftListLastItem,
            selectedNavItem === 'events' && styles.active
          )}
        >
          <a
            href="#events"
            className={css(styles.label)}
            onClick={() => handleNavItemClick('events')}
          >
            {events.header}
          </a>
        </li>
      </ul>
      <div className={css(styles.logoContainer)}>
        <img src="logo.png" alt="The Eye" className={css(styles.logo)}></img>
      </div>
      <ul className={css(styles.list, styles.righttList)}>
        <li
          className={css(
            styles.listItem,
            styles.rightListfirstItem,
            selectedNavItem === 'beliefs' && styles.active
          )}
        >
          <a
            href="#beliefs"
            className={css(styles.label)}
            onClick={() => handleNavItemClick('beliefs')}
          >
            {beliefs.header}
          </a>
        </li>
        <li
          className={css(
            styles.listItem,
            selectedNavItem === 'contact' && styles.active
          )}
        >
          <a
            href="#contact"
            className={css(styles.label)}
            onClick={() => handleNavItemClick('contact')}
          >
            {contact.header}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
