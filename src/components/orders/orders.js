import OrderListHeader from '../order-list-header/order-list-header';
import OrderList from '../order-list/order-list';
import OrderListFooter from '../order-list-footer/order-list-footer';

import './orders.css';

import OrdersData from '../../data/orders.json'

const Orders = () => {
  return (
    <div className="table">
      <OrderListHeader />
      <OrderList />
      <OrderListFooter />
    </div>
    
  )
}

export default Orders;