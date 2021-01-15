import React, { useState } from 'react';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';
import { LOCALE_KEY } from '../../util/constants';

const Teachings = (props) => {
  const styles = styleSheet();
  const locale = localStorage.getItem(LOCALE_KEY) || 'english';
  const [showModal, setShowModal] = useState(false);
  const [selectedTeaching, setSelectedTeaching] = useState(null);
  const handleTeachingClick = (teachingObject) => {
    setShowModal(true);
    setSelectedTeaching(teachingObject);
  };
  const handleCloseClick = () => {
    setShowModal(false);
    setSelectedTeaching(null);
  }

  return (
    <section id='teachings' className={css(styles.teachings)}>
      <h1 className={css(styles.headline)}>{props.data.header}</h1>
      <div className={css(styles.list)}>
        {props.data.contents.map((obj, i) => {
          return <div key={i} className={css(styles.item)}>
            <p className={css(styles.subheadline)} onClick={() => handleTeachingClick(obj)}>{obj.title}</p>
          </div>
        })}
      </div>
      {showModal && 
        <div className={css(styles.modal)}>
          <div className={css(styles.modalHeader)}>
            <div className={css(styles.logoContainer)}></div>
            <img src="logo.png" alt="The Eye" className={css(styles.logo)}></img>
            <button aria-label="Close" className={css(styles.close)} onClick={() => handleCloseClick()}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className={css(styles.modalBody)}>
            <h1 className={css(styles.modalHeadline)}>{selectedTeaching.title}</h1>
            {selectedTeaching.content.map((content, i) => {
              const isPoem = selectedTeaching.title === 'The Teachings of the Son of God on Earth' || selectedTeaching.title === 'Mga Aral ng Diyos Anak sa Ibabaw ng Lupa';
              const paragraphs = content.paragraph.map((item, j) => {
                return <p key={j} className={css(styles.paragraphItem, isPoem && styles.poem, isPoem && locale === 'english' && styles.english)} dangerouslySetInnerHTML={{ __html: item }}></p>
              });

              const list = content.list.map((item, k) => {
                return <li key={k} className={css(styles.listItem)} dangerouslySetInnerHTML={{ __html: item }}></li>
              });

              const  quotes = content.quotes.map((item, l) => {
                return <li key={l} className={css(styles.listItem)}>
                  <blockquote>{item.quote}</blockquote>
                  <figcaption className={css(styles.figcaption)}>
                  {item.author && <div className={css(styles.author)}> &mdash; {item.author}</div>}
                  {item.date && <div className={css(styles.date)}>{item.date}</div>}
                  </figcaption>
                </li>
              });

              return <div key={i} className={css(styles.contentContainer)}>
                <h3>{content.headline}</h3>
                <div> 
                {paragraphs}
                </div>
                <ol>
                  {list}
                  {quotes}
                </ol>
              </div>
            })}
          </div>
        </div>
      }
    </section>
  );
};

export default Teachings;