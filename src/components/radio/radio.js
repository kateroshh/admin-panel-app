import './radio.css';

import Input from '../input/input';


const Radio = ({
  inputStyle, 
  inputSize, 
  placeholderText,
  imageAfter,
  imageBefore,
  textBefore,
  textLabel
}) => {

  return (
      <div className="radio">
        <div className="radio__input">
          <Input 
            imageAfter={3} 
            buttonOn={0} 
            readOnly={true} 
            inputSize={3}
            valueInput="Новый"
            textLabel="Статус заказа"/>
        </div>
        <div className="dropdowns">
          <div className="dropdown-radio">
            <div className="dropdown-radio__items">
              <label className="dropdown-radio__label">
                <input className="dropdown-radio__item" type="radio" name="radio" value="1" />
                <div className="dropdown-radio__text">Новый</div>
              </label>
            </div>
            <div className="dropdown-radio__items">
              <label className="dropdown-radio__label">
                <input className="dropdown-radio__item" type="radio" name="radio" value="2" />
                <div className="dropdown-radio__text">Рассчет</div>
              </label>
            </div>
            <div className="dropdown-radio__items">
              <label className="dropdown-radio__label">
                <input className="dropdown-radio__item" type="radio" name="radio" value="6" />
                <div className="dropdown-radio__text">Подтвержден</div>
              </label>
            </div>
            <div className="dropdown-radio__items">
              <label className="dropdown-radio__label">
                <input className="dropdown-radio__item" type="radio" name="radio" value="3" />
                <div className="dropdown-radio__text">Отложен</div>
              </label>
            </div>
            <div className="dropdown-radio__items">
              <label className="dropdown-radio__label">
                <input className="dropdown-radio__item" type="radio" name="radio" value="5" />
                <div className="dropdown-radio__text">Выполнен</div>
              </label>
            </div>
            <div className="dropdown-radio__items">
              <label className="dropdown-radio__label">
                <input className="dropdown-radio__item" type="radio" name="radio" value="4" />
                <div className="dropdown-radio__text">Отменен</div>
              </label>
            </div>
          </div>
        </div>
        
      </div>
  )
}

export default Radio;