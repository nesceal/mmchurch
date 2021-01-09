import React, { useState } from 'react';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';

const Header = ({ data }) => {
  const styles = styleSheet();
  const { about, history, events, beliefs, contact } = data;
  const [selectedNavItem, setSelectedNavItem] = useState('');

  const handleNavItemClick = (navItem) => {
    setSelectedNavItem(navItem);
    // setSelectedNavItem(item);
  };

  return (
    <nav className={css(styles.nav)}>
      <ul className={css(styles.list, styles.leftList)}>
        <li
          className={css(
            styles.listItem,
            selectedNavItem === 'about' && styles.active
          )}
          onClick={() => handleNavItemClick('about')}
        >
          <a href="#about" className={css(styles.label)}>
            {about.header}
          </a>
        </li>
        <li
          className={css(
            styles.listItem,
            selectedNavItem === 'history' && styles.active
          )}
          onClick={() => handleNavItemClick('history')}
        >
          <a href="#history" className={css(styles.label)}>
            {history.header}
          </a>
        </li>
        <li
          className={css(
            styles.listItem,
            styles.leftListLastItem,
            selectedNavItem === 'events' && styles.active
          )}
          onClick={() => handleNavItemClick('events')}
        >
          <a href="#events" className={css(styles.label)}>
            {events.header}
          </a>
        </li>
      </ul>
      <div className={css(styles.logoContainer)}>
        <img src="logo.png" className={css(styles.logo)}></img>
      </div>
      <ul className={css(styles.list, styles.righttList)}>
        <li
          className={css(
            styles.listItem,
            styles.rightListfirstItem,
            selectedNavItem === 'beliefs' && styles.active
          )}
          onClick={() => handleNavItemClick('beliefs')}
        >
          <a href="#beliefs" className={css(styles.label)}>
            {beliefs.header}
          </a>
        </li>
        <li
          className={css(
            styles.listItem,
            selectedNavItem === 'contact' && styles.active
          )}
          onClick={() => handleNavItemClick('contact')}
        >
          <a href="#contact" className={css(styles.label)}>
            {contact.header}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
