import React from 'react';
import LocalizationData from '../../data/localization';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';

const Header = (props) => {
  const styles = styleSheet();

  return (
    <header className={css(styles.header)}>
      <a href="#about" className={css(styles.headerItem)}>
        About
      </a>
      <a href="#history" className={css(styles.headerItem)}>
        History
      </a>
      <a href="#events" className={css(styles.headerItem)}>
        Events
      </a>
      <a href="#beliefs" className={css(styles.headerItem)}>
        Beliefs
      </a>
      <a href="#contact" className={css(styles.headerItem)}>
        Contact
      </a>
    </header>
  );
};

export default Header;
