import Checkbox from '../checkbox/checkbox';

import './order-list-header.css';

const OrderListHeader = () => {
  return (
    <div className="table__header">
      <ul className="table__header-list">
        <li className="table__header-item">
          <Checkbox />
        </li>
        <li className="table__header-item">
          <div className="table__header-text">#</div>
        </li>
        <li className="table__header-item">
          <div className="table__header-group">
            <div className="table__header-group-text">Дата</div>
            <svg className="table__header-group-img"  viewBox="0 0 16 16" fill="#EBF0F5" stroke="none">
            <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z" stroke="none"/>
            </svg>
          </div>
        </li>
        <li className="table__header-item">
          <div className="table__header-group">
            <div className="table__header-group-text">Статус</div>
            <svg className="table__header-group-img"  viewBox="0 0 16 16" fill="#EBF0F5" stroke="none">
            <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z" stroke="none"/>
            </svg>
          </div>
        </li>
        <li className="table__header-item">
          <div className="table__header-group">
            <div className="table__header-group-text">Позиций</div>
            <svg className="table__header-group-img"  viewBox="0 0 16 16" fill="#EBF0F5" stroke="none">
            <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z" stroke="none"/>
            </svg>
          </div>
        </li>
        <li className="table__header-item">
          <div className="table__header-group">
            <div className="table__header-group-text">Сумма</div>
            <svg className="table__header-group-img"  viewBox="0 0 16 16" fill="#EBF0F5" stroke="none">
            <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z" stroke="none"/>
            </svg>
          </div>
        </li>
        <li className="table__header-item">
          <div className="table__header-text">ФИО покупателя</div>
        </li>
      </ul>
    </div>
  )
}

export default OrderListHeader;