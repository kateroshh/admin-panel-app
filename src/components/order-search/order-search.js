import { Component } from 'react';

import './order-search.css';

import Input from '../input/input';
import Button from '../button/button';
import OrderFilter from '../order-filter/order-filter';

import {actions, store} from '../../data';
import { connect } from 'react-redux';


class OrderSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      showFilter: 0
    }
  }
  onShowFilter = () => {

    this.setState(() => {
      let newShowFilter = 0;
      this.state.showFilter===1 ? newShowFilter=0 : newShowFilter=1;
      return {
        showFilter: newShowFilter
      }
    })
  }

  render(){
    return (
      <div className="search">
        <div className="order-search">
          <div className="order-search__items">
            <Input 
              inputSize={2} 
              imageBefore={1}
              placeholderText="Номер заказа или ФИО"
              onChange={(event)=>{
                store.dispatch(actions.userFilterSetNameFilterAction(event.currentTarget.value));
                store.dispatch(actions.userFilterSetIdFilterAction(event.currentTarget.value));
              }}
              valueInput={this.props.filterName!='' ? this.props.filterName : this.props.filterId}/>
            <div className="order-search_space">
              <Button 
                buttonSize={1} 
                buttonIcon={2}
                buttonText="Фильтр"
                onClick={this.onShowFilter}/>
            </div>
            <Button 
              buttonSize={1} 
              buttonStyle={1}
              buttonText="Сбросить фильтры"
              onClick={()=>{
                store.dispatch(actions.userFilterSetClearFilterAction());
              }}/>
          </div>
          <Button 
            buttonSize={1} 
            buttonStyle={1}
            buttonIcon={5}
            buttonText="Загрузка"/>
        </div>
        {this.state.showFilter===1 ? <OrderFilter/> : ''}
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    filterName: state.filterReducer.filterName,
    filterId: state.filterReducer.filterId,
  }
}
export default connect(mapStateToProps)(OrderSearch);