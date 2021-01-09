import React from 'react';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';

const Events = (props) => {

  const styles = styleSheet();

  return (
    <section id='events' className={css(styles.events)}>
      <h1>{props.data.header}</h1>
      <div className={css(styles.list)}>
        {props.data.contents.map((obj, i) => {
          return <div key={i} className={css(styles.event)}>
            <img src={obj.icon} alt={obj.title} className={css(styles.icon)} />
            <h2 className={css(styles.subheadline)}>{obj.title}</h2>
            <ul className={css(styles.content)}>
              {obj.content && obj.content.map((item, j) => {
                return <li key={j}>{item}</li>;
              })}
            </ul>
          </div>
        })}
      </div>
    </section>
  );
};

export default Events;