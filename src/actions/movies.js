
export const MOVIES_NOT_STARTED = 'MOVIES_NOT_STARTED';
export const MOVIES_INITIATED = 'MOVIES_INITIATED';
export const MOVIES_SUCCESS = 'MOVIES_SUCCESS';
export const MOVIES_FAILURE = 'MOVIES_FAILURE';

function moviesInitiated(controller) {
  return {
    type: MOVIES_INITIATED,
    controller
  };
}
function moviesSuccess(json) {
  return {
    type: MOVIES_SUCCESS,
    json: json
  };
}
function moviesFailure(json) {
  return {
    type: MOVIES_FAILURE,
    json: json
  };
}

export function fetchMovies(value) {
    return (dispatch, getState) => {
      getState()?.movies?.controller?.abort();
      const newController = new AbortController();
      dispatch(moviesInitiated(newController));
      fetch(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=dbc0a6d62448554c27b6167ef7dabb1b`,
      {signal: newController.signal})
        .then(response => response)
        .then(response => response.json())
        .then(json => {
          dispatch(moviesSuccess(json.results));
        }).catch( ( error)=> {
          dispatch(moviesFailure('error'))
        })
    };
  }
