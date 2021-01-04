import React from 'react';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';

const About = () => {

  const styles = styleSheet();

  return (
    <section className={css(styles.about)}>
      About
    </section>
  );
};

export default About;