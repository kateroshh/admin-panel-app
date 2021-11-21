import './select.css';

import Input from '../input/input';
import Checkbox from '../checkbox/checkbox';

/*icons*/
import { ReactComponent as CheckboxIcon } from './icons/checkbox.svg';
/*icons*/

const Select = ({
}) => {

  return (
      <div className="select">
        <div className="select__input">
          <Input 
            imageAfter={3} 
            buttonOn={0} 
            readOnly={true} 
            inputSize={3}
            valueInput="Новый"
            textLabel="Статус заказа"/>
        </div>
        <div className="dropdowns">
          <div className="dropdown-select">
            <div className="dropdown-select__items">
              <label className="dropdown-select__label">
                <div className="dropdown-select__group">
                  <input className="dropdown-select__item" type="checkbox" value="1" checked/>
                  <div className="dropdown-select__img">
                    <CheckboxIcon />
                  </div>
                </div>
                <div className="dropdown-select__text">Новый</div>
              </label>
            </div>
            <div className="dropdown-select__items">
              <label className="dropdown-select__label">
                <div className="dropdown-select__group">
                  <input className="dropdown-select__item" type="checkbox" value="2"/>
                  <div className="dropdown-select__img">
                    <CheckboxIcon />
                  </div>
                </div>
                <div className="dropdown-select__text">Рассчет</div>
              </label>
            </div>
            <div className="dropdown-select__items">
              <label className="dropdown-select__label">
                <div className="dropdown-select__group">
                  <input className="dropdown-select__item" type="checkbox"value="6" />
                  <div className="dropdown-select__img">
                    <CheckboxIcon />
                  </div>
                </div>
                <div className="dropdown-select__text">Подтвержден</div>
              </label>
            </div>
            <div className="dropdown-select__items">
              <label className="dropdown-select__label">
                <div className="dropdown-select__group">
                  <input className="dropdown-select__item" type="checkbox" value="3" />
                  <div className="dropdown-select__img">
                    <CheckboxIcon />
                  </div>
                </div>
                <div className="dropdown-select__text">Отложен</div>
              </label>
            </div>
            <div className="dropdown-select__items">
              <label className="dropdown-select__label">
                <div className="dropdown-select__group">
                  <input className="dropdown-select__item" type="checkbox" value="5" />
                  <div className="dropdown-select__img">
                    <CheckboxIcon />
                  </div>
                </div>
                <div className="dropdown-select__text">Выполнен</div>
              </label>
            </div>
            <div className="dropdown-select__items">
              <label className="dropdown-select__label">
                <div className="dropdown-select__group">
                  <input className="dropdown-select__item" type="checkbox" value="4" />
                  <div className="dropdown-select__img">
                    <CheckboxIcon />
                  </div>
                </div>
                <div className="dropdown-select__text">Отменен</div>
              </label>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Select;