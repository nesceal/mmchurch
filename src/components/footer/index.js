import React from 'react';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';

const Footer = () => {

  const styles = styleSheet();

  return (
    <footer className={css(styles.footer)}>
      Footer
    </footer>
  );
};

export default Footer;