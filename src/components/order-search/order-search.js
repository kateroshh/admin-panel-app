import { Component } from 'react';

import './order-search.css';

import Input from '../input/input';
import Button from '../button/button';
import OrderFilter from '../order-filter/order-filter';


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
              placeholderText="Номер заказа или ФИО"/>
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
              buttonText="Сбросить фильтры"/>
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

export default OrderSearch;