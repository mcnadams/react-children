import React, { useState } from 'react';
import Sidebar from './Sidebar';
import styles from './App.css';

export default function App() {

  const [state, nextState] = useState('home');
  const content = {
    home: 'This is the home page',
    shop: 'This is an online store',
    about: 'This is a store that sells fun stuff',
    contact: 'Problems? We can\'t help you.'
  };

  return (
    <section className={styles.section}>
      <Sidebar>
        <a href='#' onClick={() => nextState('home')}>Home</a>
        <a href='#' onClick={() => nextState('shop')}>Shop</a>
        <a href='#' onClick={() => nextState('about')}>About</a>
        <a href='#' onClick={() => nextState('contact')}>Contact</a>
      </Sidebar>
      <p>{content[state]}</p>
    </section>
  );

}
