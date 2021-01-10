import React from 'react';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';

const History = (props) => {
  const styles = styleSheet();

  return (
    <section id="history" className={css(styles.history)}>
      <h1 className={css(styles.headline)}>{props.data.header}</h1>
      <div className={css(styles.list)}>
        {props.data.contents.map((obj, i) => {
          return (
            <div
              key={i}
              className={css(
                styles.itemContainer,
                i % 2 === 0 ? styles.even : styles.odd
              )}
            >
              <div className={css(styles.circle)}></div>
              <div className={css(styles.item)}>
                <h3 className={css(styles.title)}>{obj.title}</h3>
                <p className={css(styles.paragraph)}>{obj.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default History;
