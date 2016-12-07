import {combineReducers} from 'redux';
import GlobalReducers from './global-reducers';
import StageReducers from './stage-reducers';

const allReducers = combineReducers({
	global: GlobalReducers,
	stage: StageReducers
});

export default allReducers;