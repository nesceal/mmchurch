import React from 'react';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';

const Section = () => {

  const styles = styleSheet();

  return (
    <section className={css(styles.section)}>
      Section
    </section>
  );
};

export default Section;