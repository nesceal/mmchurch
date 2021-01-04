import React from 'react';
import LocalizationData from '../../data/localization';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';
import { LOCALE_KEY } from '../../util/constants';

const Footer = (props) => {

  const styles = styleSheet();

  const handleLocaleClick = (locale) => {
    if (props.locale !== locale) {
      localStorage.setItem(LOCALE_KEY, locale);
      props.setData(LocalizationData[locale]);
    }
  };

  return (
    <footer className={css(styles.footer)}>
      <div>
        <span className={css(styles.locale)} onClick={() => handleLocaleClick('english')}>English</span>&nbsp;|&nbsp;
        <span className={css(styles.locale)} onClick={() => handleLocaleClick('tagalog')}>Filipino</span>
      </div>
      <p className={css(styles.copyright)}>&copy; 2020 Malayang Mananampalataya Church, Inc.</p>
    </footer>
  );
};

export default Footer;