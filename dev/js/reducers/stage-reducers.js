export default function(state={
	default:false,
	name:'RDC',
	icon:'arrow up color-purple large icon',
},action){
	switch(action.type){
		case "UPDATE-STAGE":
			return{
				state, default : action.value, name: action.value? '1er Etage':'RDC', icon: action.value? 'arrow down color-purple large icon':'arrow up color-purple large icon'
			}
			break;
	}
	return state;
}