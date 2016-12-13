export default function(state={
	phone: 'NC',
	rdc : "null",
	floor : "start",
	enterprise : null,

},action){
	switch(action.type){
		case "CHANGE-STATUS":
		console.log(action.value);
		return {
			state, enterprise:action.value[1], phone:action.value[0], rdc:action.value[3], floor:action.value[2]
		}
		break
		default: return state;
	}
	return state;
}