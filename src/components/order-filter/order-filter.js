import Input from '../input/input';
import Button from '../button/button';
import Radio from '../radio/radio';

import './order-filter.css';

const OrderFilter = () => {
  return (
    <div className="order-filter">
      <div className="order-filter__date">
        <div className="order-filter_space">
          <Input 
            inputSize={1}
            textBefore={1}
            placeholderText="dd.mm.yyyy"
            textLabel="Дата оформления"/>
        </div>
        <Input 
          inputSize={1}
          textBefore={2}
          placeholderText="dd.mm.yyyy"/>
      </div>
      <div className="order-filter__status">
        <Radio />
      </div>
      <div className="order-filter__sum">
        <div className="order-filter_space">
          <Input 
            inputSize={1}
            textBefore={3}
            textLabel="Сумма заказа"/>
        </div>
        <Input 
          inputSize={1}
          textBefore={4}/>
      </div>
      <div className="order-filter__apply">
        <Button 
          buttonStyle={1}
          buttonSize={1}
          buttonText="Применить"/>
      </div>
    </div>
  )
}

export default OrderFilter;