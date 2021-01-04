import React from 'react';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';

const Landing = () => {

  const styles = styleSheet();

  return (
    <section className={css(styles.landing)}>
      Landing
    </section>
  );
};

export default Landing;