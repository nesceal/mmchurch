import React from 'react';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';

const Contact = (props) => {

  const styles = styleSheet();

  return (
    <section id='contact' className={css(styles.contact)}>
      <h1>{props.data.header}</h1>
    </section>
  );
};

export default Contact;