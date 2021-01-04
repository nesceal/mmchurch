import React from 'react';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';

const Beliefs = props => {

  const styles = styleSheet();

  return (
    <section id='beliefs' className={css(styles.beliefs)}>
      <h1>{props.data.header}</h1>
    </section>
  );
};

export default Beliefs;