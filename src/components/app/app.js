import { Component } from 'react';

import './reset.css';
import './app.css';

import Header from '../header/header';
import OrderSearch from '../order-search/order-search';




function App() {
  return (
    <div className="wrapper">
      <Header />
      <OrderSearch />


    </div>
  );
}

export default App;
