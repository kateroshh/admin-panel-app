import { combineReducers } from 'redux';

import { filterReducer } from './filter_reducer';
import { ordersDataReducer } from './orders_list_reducer';

export default combineReducers ({
  filterReducer,
  ordersDataReducer
})