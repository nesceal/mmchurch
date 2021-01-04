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
      <div className={css(styles.locale)}>
        <span onClick={() => handleLocaleClick('english')}>English</span> |{' '}
        <span onClick={() => handleLocaleClick('tagalog')}>Filipino</span>
      </div>
    </footer>
  );
};

export default Footer;
