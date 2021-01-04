import React from 'react';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';

const Contact = () => {

  const styles = styleSheet();

  return (
    <section className={css(styles.contact)}>
      Contact
    </section>
  );
};

export default Contact;