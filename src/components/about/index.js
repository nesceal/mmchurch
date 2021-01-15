import React from 'react';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';

const About = (props) => {
  const styles = styleSheet();

  return (
    <section id="about" className={css(styles.about)}>
      <h1 className={css(styles.headline)}>{props.data.sectionTitle}</h1>
      <div className={css(styles.container)}>
        <span className={css(styles.imageContainer)}>
          <img
            src="images/church.jpg"
            alt="MM Church"
            className={css(styles.image)}
          ></img>
        </span>

        <p className={css(styles.paragraph)} dangerouslySetInnerHTML={{ __html: props.data.content }}></p>
      </div>
    </section>
  );
};

export default About;
