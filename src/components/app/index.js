import React, { useState } from 'react';
import Header from '../header';
import Landing from '../landing';
import About from '../about';
import History from '../history';
import Events from '../events';
import Beliefs from '../beliefs';
import Contact from '../contact';
import Footer from '../footer';
import LocalizationData from '../../data/localization';
import { LOCALE_KEY } from '../../util/constants';
import { css } from 'aphrodite/no-important';
import { styleSheet } from './styles';

function App() {

  const styles = styleSheet();
  const locale = localStorage.getItem(LOCALE_KEY) || 'english';
  const [data, setData] = useState(LocalizationData[locale]);

  return (
    <main className={css(styles.app)}>
      {Object.keys(data).length > 0 &&
        <>
          <Header />
          <Landing />
          <About data={data.about} />
          <History data={data.history} />
          <Events data={data.events} />
          <Beliefs data={data.beliefs} />
          <Contact data={data['contact-us']} />
        </>
      }
      <Footer locale={locale} setData={setData} />
    </main>
  );
}

export default App;
