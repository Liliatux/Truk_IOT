export default function(state={
	name : "Simplon.co",
	phone : "05 82 08 07 49",
	web: "tralla.com"
},action){
	switch(action.type){
		case "UPDATE-MENU":
		console.log('test');
		break;
	}
	return state;
}

