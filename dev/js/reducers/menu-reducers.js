export default function(state={
	name : "Simplon.co",
	phone : "05 82 08 07 49",
	web: "tralla.com",
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

