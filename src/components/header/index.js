import React from 'react';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';

const Header = ({ data }) => {
  const styles = styleSheet();
  const { about, history, events, beliefs, contact } = data;

  return (
    <header className={css(styles.header)}>
      <a href="#about" className={css(styles.headerItem)}>
        {about.header}
      </a>
      <a href="#history" className={css(styles.headerItem)}>
        {history.header}
      </a>
      <a href="#events" className={css(styles.headerItem)}>
        {events.header}
      </a>
      <a href="#beliefs" className={css(styles.headerItem)}>
        {beliefs.header}
      </a>
      <a href="#contact" className={css(styles.headerItem)}>
        {contact.header}
      </a>
    </header>
  );
};

export default Header;
