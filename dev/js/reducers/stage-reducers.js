export default function(state={
	default:false,
	name:'RDC',
	icon:'arrow up violet large icon',
},action){
	switch(action.type){
		case "UPDATE-STAGE":
			return{
				state, default : action.value, name: action.value? '1er Etage':'RDC', icon: action.value? 'arrow down violet large icon':'arrow up violet large icon'
			}
			break;
	}
	return state;
}