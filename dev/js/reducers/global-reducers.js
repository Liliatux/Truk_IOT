export default function(state={
	phone: null,
	rdc : "null",
	floor : "null",
	enterprise : null,
	test: "enterprise"

},action){
	switch(action.type){
		case "CHANGE-STATUS":
		console.log(action.value);
		return {
			state, test:action.value[1], phone:action.value[0], rdc:action.value[3], floor:action.value[2]
		}
	}
	return state;
}