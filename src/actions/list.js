
export const LIST_NOT_STARTED = 'LIST_NOT_STARTED';
export const LIST_INITIATED = 'LIST_INITIATED';
export const LIST_SUCCESS = 'LIST_SUCCESS';
export const LIST_FAILURE = 'LIST_FAILURE';

function listInitiated() {
  return {
    type: LIST_INITIATED
  };
}
function listSuccess(json) {
  return {
    type: LIST_SUCCESS,
    json: json
  };
}
function listFailure(json) {
  return {
    type: LIST_FAILURE,
    json: json
  };
}

export function fetchList() {
  return dispatch => {
    dispatch(listInitiated());
    fetch('http://5afa7456edf5520014cbd352.mockapi.io/hello-world')
      .then(response => response)
      .then(response => response.json())
      .then(json => {
        dispatch(listSuccess(json));
      }).catch( ( error)=> {
        dispatch(listFailure('error'))
      })
  };
}
