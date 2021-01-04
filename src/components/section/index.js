import React from 'react';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';

const Section = (props) => {
  const styles = styleSheet();

  return (
    <section id={props.id} className={css(styles.section)}>
      <h2>{props.data.header}</h2>
    </section>
  );
};

export default Section;
