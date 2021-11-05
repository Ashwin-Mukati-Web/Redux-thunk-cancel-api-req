import list from './list';
import itemLister from './itemLister'
import {combineReducers} from 'redux';
import movies from './movies'
const reducer = combineReducers({
  list,
  itemLister,
  movies
});

export default reducer;
