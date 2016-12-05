export default function(state={
	phone: null,
	map : null,
	etage : null,
	enterprise : null,
	test: "Salut lenni ! ça va ?"

},action){
	switch(action.type){
		case "CHANGE-STATUS":
		console.log(action.value);
		return {
			state, test:action.value[1]
		}
	}
	return state;
}