export default function(state={
	default:false,
	name:'Rez-de-Chaussée',
	icon:'arrow up inverted large icon',
},action){
	switch(action.type){
		case "UPDATE-STAGE":
			return{
				state, default : action.value, name: action.value? '1er Etage':'Rez-de-Chaussée', icon: action.value? 'arrow down inverted large icon':'arrow up inverted large icon'
			}
			break;
	}
	return state;
}