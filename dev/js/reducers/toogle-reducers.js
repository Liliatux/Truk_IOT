export default function(state={
	active: false
},action){
	switch(action.type){
		case 'CHANGE-TOOGLE': 
		return {
			state, active:!state.active
		}
		break;
	}
	return state;
}