export default function(state={
	phone: null,
	map : null,
	etage : null,
	enterprise : null,
	test: "enterprise"

},action){
	switch(action.type){
		case "CHANGE-STATUS":
		console.log(action.value);
		return {
			state, test:action.value[1],
			state, phone:action.value[0]
		}
	}
	return state;
}