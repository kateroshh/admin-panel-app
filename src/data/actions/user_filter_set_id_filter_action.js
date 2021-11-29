import { USER_FILTER_SET_ID_FILTER } from '../actions_types'

export function userFilterSetIdFilterAction(filterId){
  return {
    type: USER_FILTER_SET_ID_FILTER,
    filterId,
  }
}