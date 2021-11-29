import { Component } from 'react';
import { createStore } from 'redux'

import './reset.css';
import './app.css';

import Header from '../header/header';
import OrderSearch from '../order-search/order-search';
import Orders from '../orders/orders';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <OrderSearch />
      <Orders />
    </div>
  );
}

export default App;
