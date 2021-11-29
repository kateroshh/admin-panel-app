import Input from '../input/input';
import Button from '../button/button';
import Select from '../select/select';
import Calendar from '../calendar/calendar';

import './order-filter.css';

import { actions, store } from '../../data';
import { connect } from 'react-redux';

const OrderFilter = () => {
  return (
    <div className="order-filter">
      <div className="order-filter__date">
        <div className="order-filter_space">
          <Calendar 
            textBefore={1} 
            textLabel="Дата оформления"
            onChange={(event)=>{
                const rr = new Date(event.timeStamp)
                console.log(rr);
                // store.dispatch(actions.userFilterSetDateMinFilterAction(event.currentTarget.value));
              }}/>
        </div>
        <Calendar textBefore={2}/>
      </div>
      <div className="order-filter__status">
        <Select />
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

// export default OrderFilter;

const mapStateToProps = function(state) {
  return {
    calendarDateMin: state.filterReducer.calendarDateMin,
    calendarDateMax: state.filterReducer.calendarDateMax,
  }
}
export default connect(mapStateToProps)(OrderFilter);