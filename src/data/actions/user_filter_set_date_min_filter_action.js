import { USER_FILTER_SET_DATE_MIN_FILTER } from '../actions_types'

export function userFilterSetDateMinFilterAction(calendarDateMin){
  return {
    type: USER_FILTER_SET_DATE_MIN_FILTER,
    calendarDateMin,
  }
}