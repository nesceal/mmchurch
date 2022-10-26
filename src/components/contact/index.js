import React from 'react';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';

const Contact = (props) => {
  const styles = styleSheet();

  return (
    <section id="contact" className={css(styles.contact)}>
      <h1 className={css(styles.headline)}>{props.data.header}</h1>
      <p
        className={css(styles.paragraph)}
        dangerouslySetInnerHTML={{ __html: props.data.contents }}
      />
    </section>
  );
};

export default Contact;
