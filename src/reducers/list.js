import { LIST_INITIATED, LIST_NOT_STARTED, LIST_SUCCESS, LIST_FAILURE } from '../actions/list';

export default function list(state={}, action) {
  let newState = { ...state }
  switch (action.type) {
    case LIST_INITIATED:
      newState = {
        status: LIST_INITIATED
      }
      return newState;
    case LIST_SUCCESS:
      newState = {
        status: LIST_SUCCESS,
        data: action.json
      }
      return newState;
    case LIST_FAILURE:
        newState = {
          status: ITEM_LISTER_FAILURE,
          data: action.json
        }
    return newState;
    default:
      return state;
  }
}
