import React from 'react';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';

const Events = (props) => {

  const styles = styleSheet();

  return (
    <section id='events' className={css(styles.events)}>
      <h1>{props.data.header}</h1>
    </section>
  );
};

export default Events;