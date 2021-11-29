import React from 'react';
import OrderListHeader from '../order-list-header/order-list-header';
import OrderList from '../order-list/order-list';
import OrderListFooter from '../order-list-footer/order-list-footer';

import './orders.css';

import { store } from '../../data';
import { connect } from 'react-redux';

function Orders ({ ordersData, filterName, filterId }) {
  return (
    <div className="table">
      <OrderListHeader />
      <OrderList ordersData = { ordersData.filter((user) => String(user.name).toLowerCase().includes(filterName) || String(user.id).includes(filterId))  } />
      <OrderListFooter />
    </div>
  )
}

const mapStateToProps = function(state) {
  return {
    filterName: state.filterReducer.filterName,
    filterId: state.filterReducer.filterId,
    ordersData: state.ordersDataReducer.ordersData,
  }
}
export default connect(mapStateToProps)(Orders);