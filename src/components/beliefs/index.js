import React from 'react';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';

const Beliefs = props => {

  const styles = styleSheet();

  return (
    <section id='beliefs' className={css(styles.beliefs)}>
      <h1>{props.data.header}</h1>
      <div className={css(styles.list)}>
        {props.data.contents.map((obj, i) => {
          return <div key={i} className={css(styles.belief)}>
            <h2 className={css(styles.subheadline)}>{obj.title}</h2>
            <p className={css(styles.paragraph)}>{obj.content}</p>
          </div>
        })}
      </div>
    </section>
  );
};

export default Beliefs;