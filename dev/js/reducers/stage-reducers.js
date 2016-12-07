export default function(state={
	default:false,
	name:'1ére Etage',
},action){
	switch(action.type){
		case "UPDATE-STAGE":
			return{
				state, default : action.value, name: action.value? 'Rez de chaussé':'1ére Etage'
			}
			break;
	}
	return state;
}