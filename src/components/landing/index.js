import React from 'react';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';

const Landing = (props) => {
  const styles = styleSheet();

  return (
    <section className={css(styles.landing)}>
      <img className={css(styles.background)} src="images/header2.jpeg" alt="A.C.D.U.D.U.M. NIÑO DE PASTOR"></img>
      <p className={css(styles.paragraph)}>
        {props.data.content} - A.C.D.U.D.U.M. NIÑO DE PASTOR
      </p>
    </section>
  );
};

export default Landing;
