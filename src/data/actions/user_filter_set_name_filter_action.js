import { USER_FILTER_SET_NAME_FILTER } from '../actions_types'

export function userFilterSetNameFilterAction(filterName){
  return {
    type: USER_FILTER_SET_NAME_FILTER,
    filterName,
  }
}