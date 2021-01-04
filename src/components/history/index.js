import React from 'react';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';

const History = () => {

  const styles = styleSheet();

  return (
    <section className={css(styles.history)}>
      History
    </section>
  );
};

export default History;