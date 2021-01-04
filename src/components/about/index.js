import React from 'react';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';

const About = (props) => {

  const styles = styleSheet();

  return (
    <section id='about' className={css(styles.about)}>
      <h1>{props.data.header}</h1>
    </section>
  );
};

export default About;