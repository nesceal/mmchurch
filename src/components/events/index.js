import React from 'react';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';

const Events = () => {

  const styles = styleSheet();

  return (
    <section className={css(styles.events)}>
      Events
    </section>
  );
};

export default Events;