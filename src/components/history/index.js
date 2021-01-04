import React from 'react';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';

const History = (props) => {

  const styles = styleSheet();

  return (
    <section id='history' className={css(styles.history)}>
      <h1>{props.data.header}</h1>
    </section>
  );
};

export default History;