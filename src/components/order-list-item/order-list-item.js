import Checkbox from '../checkbox/checkbox';

/*icons*/
import { ReactComponent as CanselIcon } from './icons/cansel.svg';
import { ReactComponent as DoneIcon } from './icons/done.svg';
import { ReactComponent as CountIcon } from './icons/dot-count.svg';
import { ReactComponent as NewIcon } from './icons/dot-new.svg';
import { ReactComponent as PostponedIcon } from './icons/dot-postponed.svg';
/*icons*/

import './order-list-item.css';

const STATUS = {
    'Новый': 'table__body-item-text_new',
    'Расчет': 'table__body-item-text_count',
    'Выполнен': 'table__body-item-text_done',
    'Отменен': 'table__body-item-text_cansel',
    'Отложен': 'table__body-item-text_postponed',
}

const STATUS_ICON = {
    'Новый': <NewIcon />,
    'Расчет': <CountIcon />,
    'Выполнен': <DoneIcon />,
    'Отменен': <CanselIcon />,
    'Отложен': <PostponedIcon />,
}

const OrderListItem = ({
  id,
  creationDate,
  status,
  positionsCount,
  sum,
  name,
}) => {
  const classStatus = "table__body-item-text " + STATUS[status];
  const classCansel = status==='Отменен' ? " table__body-item-img_cansel" : '';
  const classStatusIcon = "table__body-item-img" + classCansel;

  return (
    <>
      <li className="table__body-items" >
        <label className="table__body-items-lable">
          <ul className="table__body-items-row">
            <li className="table__body-item-row">
              <Checkbox />
            </li>
            <li className="table__body-item-row">
              <div className="table__body-item-text">{id}</div>
            </li>
            <li className="table__body-item-row">
              <div className="table__body-item-text">{creationDate}</div>
            </li>
            <li className="table__body-item-row">
              <div className={classStatusIcon}>
                {STATUS_ICON[status]}
              </div>
              <div className={classStatus}>{status}</div>
            </li>
            <li className="table__body-item-row">
              <div className="table__body-item-text">{positionsCount}</div>
            </li>
            <li className="table__body-item-row">
              <div className="table__body-item-text">{sum}
                {sum==='-'||sum===null ? '' : <span>₽</span>}
              </div>
            </li>
            <li className="table__body-item-row">
              <div className="table__body-item-text">{name}</div>
            </li>
          </ul>
        </label>
      </li>
    </>
  )
}

export default OrderListItem;