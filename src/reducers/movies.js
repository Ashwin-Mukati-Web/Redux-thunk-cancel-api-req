import { MOVIES_INITIATED, MOVIES_NOT_STARTED, MOVIES_SUCCESS, MOVIES_FAILURE } from '../actions/MOVIES';

export default function movies(state = {
    controller: new AbortController()
    } , action) {
  switch (action.type) {
    case MOVIES_INITIATED:
       return { ...state,
        status: MOVIES_INITIATED,
        controller: action.controller
      }
    case MOVIES_SUCCESS:
      return { ...state,
        status: MOVIES_SUCCESS,
        data: action.json
      }

    case MOVIES_FAILURE:
        return { ...state,
          status: ITEM_MOVIESER_FAILURE,
          data: action.json
        }
    default:
      return state;
  }
}
