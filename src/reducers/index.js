import list from './list';
import itemLister from './itemLister'
import {combineReducers} from 'redux';

const reducer = combineReducers({
  list,
  itemLister
});

export default reducer;
