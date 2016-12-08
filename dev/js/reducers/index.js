import {combineReducers} from 'redux';
import GlobalReducers from './global-reducers';
import StageReducers from './stage-reducers';
import MenuReducers from './menu-reducers';

const allReducers = combineReducers({
	global: GlobalReducers,
	stage: StageReducers,
	menu: MenuReducers
});

export default allReducers;