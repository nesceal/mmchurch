import React from 'react';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';

const Teachings = (props) => {

  const styles = styleSheet();

  return (
    <section id='teachings' className={css(styles.teachings)}>
      <h1 className={css(styles.headline)}>{props.data.header}</h1>
      <p className={css(styles.paragraph)} dangerouslySetInnerHTML={{ __html: props.data.contents }} />
    </section>
  );
};

export default Teachings;