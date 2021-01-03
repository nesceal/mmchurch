import React, { useState } from 'react';
import Header from '../header';
import Section from '../section';
import Footer from '../footer';
import LocalizationData from '../../data/localization';
import { LOCALE_KEY } from '../../util/constants';

function App() {

  const locale = localStorage.getItem(LOCALE_KEY) || 'english';
  const [data, setData] = useState(LocalizationData[locale]);

  return (
    <main className="app">
      <Header />
      <Section />
      <Footer locale={locale} setData={setData} />
    </main>
  );
}

export default App;
