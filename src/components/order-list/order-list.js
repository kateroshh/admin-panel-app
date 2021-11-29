import OrderListHeader from '../order-list-header/order-list-header';
import OrderListItem from '../order-list-item/order-list-item';

import './order-list.css';

const OrderList = ({ordersData}) => {
  const ordersRender = ordersData.map((orderItem) => {
    return (
      <OrderListItem {...orderItem} key={orderItem.id}/>
    );
  });

  return (
      <div className="table__body">
        <ul className="table__body-list">
          {ordersRender}
        </ul>
      </div>
  )
}

export default OrderList;