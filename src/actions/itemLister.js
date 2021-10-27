
export const ITEM_LISTER_NOT_STARTED = 'ITEM_LISTER_NOT_STARTED';
export const ITEM_LISTER_INITIATED = 'ITEM_LISTER_INITIATED';
export const ITEM_LISTER_SUCCESS = 'ITEM_LISTER_SUCCESS';
export const ITEM_LISTER_FAILURE = 'ITEM_LISTER_FAILURE';

function itemListerInitiated() {
  return {
    type: ITEM_LISTER_INITIATED
  };
}
function itemListerSuccess(json) {
  return {
    type: ITEM_LISTER_SUCCESS,
    json: json
  };
}
function itemListerFailure(json) {
  return {
    type: ITEM_LISTER_FAILURE,
    json: json
  };
}

export function fetchItemLister() {
  return dispatch => {
    dispatch(itemListerInitiated());
    fetch("https://reqres.in/api/users?page=1")
        .then(data => { return data.json() })
        .then(datu => {
         dispatch(itemListerSuccess(datu))
       }).catch( ( error)=> {
        dispatch(itemListerFailure('error'))
      })
  }
}
