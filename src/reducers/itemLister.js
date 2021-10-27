import { ITEM_LISTER_INITIATED, ITEM_LISTER_NOT_STARTED, ITEM_LISTER_SUCCESS, ITEM_LISTER_FAILURE } from '../actions/itemLister';

export default function itemLister(state = {}, action) {
  let newState = { ...state }
  switch (action.type) {
    case ITEM_LISTER_INITIATED:
      newState = {
        status: ITEM_LISTER_INITIATED
      }
      return newState;
    case ITEM_LISTER_SUCCESS:
      newState = {
        status: ITEM_LISTER_SUCCESS,
        data: action.json
        }
      return newState;
    case ITEM_LISTER_FAILURE:
        newState = {
          status: ITEM_LISTER_FAILURE,
          data: action.json
        }
    return newState;
    default:
      return state;
  }
}
