import { USER_FILTER_SET_DATE_MAX_FILTER } from '../actions_types'

export function userFilterSetDateMaxFilterAction(calendarDateMax){
  return {
    type: USER_FILTER_SET_DATE_MAX_FILTER,
    calendarDateMax,
  }
}