import { 
  USER_FILTER_SET_NAME_FILTER, 
  USER_FILTER_SET_ID_FILTER,
  USER_FILTER_SET_CLEAR_FILTER,
  USER_FILTER_SET_DATE_MIN_FILTER,
  USER_FILTER_SET_DATE_MAX_FILTER,
} from '../actions_types';

const initState = {
  filterName: '',
  filterId: '',
  calendarDateMin: '01.01.1990',
  calendarDateMax: new Date().toString(),
}

export function filterReducer (initialState = initState, action){
  switch (action.type){
    case USER_FILTER_SET_NAME_FILTER: {
      return {
        ...initialState,
        filterName: action.filterName,
      }
    }
    case USER_FILTER_SET_ID_FILTER: {
      return {
        ...initialState,
        filterId: action.filterId,
      }
    }
    case USER_FILTER_SET_CLEAR_FILTER: {
      return {
        ...initialState,
        filterId: '',
        filterName: '',
      }
    }
    case USER_FILTER_SET_DATE_MIN_FILTER: {
      return {
        ...initialState,
        calendarDateMin: action.calendarDateMin,
      }
    }
    case USER_FILTER_SET_DATE_MAX_FILTER: {
      return {
        ...initialState,
        calendarDateMax: action.calendarDateMax,
      }
    }
    default: 
      return initialState
  }
}