import React from 'react';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';

const Header = () => {

  const styles = styleSheet();

  return (
    <header className={css(styles.header)}>
      Header
    </header>
  );
};

export default Header;