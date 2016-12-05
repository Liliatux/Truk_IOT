import {combineReducers} from 'redux';
import GlobalReducers from './global-reducers';

const allReducers = combineReducers({
	global: GlobalReducers
});

export default allReducers;