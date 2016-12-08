export default function(state={
	name : "",
	phone : "",
	web: "",
},action){
	switch(action.type){
		case "UPDATE-MENU":
		console.log(action.value);
		return {
			state, name:action.value[0], phone:action.value[1], web:action.value[2]
		}
		break;
	}
	return state;
}

