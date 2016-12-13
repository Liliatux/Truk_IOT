export const ChangeStatus =  (state, value) => {
	console.log("CHANGE-STATUS");
	return {
		type: "CHANGE-STATUS",
		playload: state,
		value: value
	}

}
 
export const UpdateStage = (state, value) => {
	console.log("UPDATE-STAGE");
	return {
		type: "UPDATE-STAGE",
		playload: state,
		value: value
	}
}

export const UpdateMenu = (state, value) => {
	console.log('UPDATE-MENU', value);
	return {
		type : 'UPDATE-MENU',
		playload: state,
		value: value
	}
}

export const ChangeToogle = (state) => {
	console.log('CHANGE-TOOGLE');
	return {
		type : 'CHANGE-TOOGLE',
		playload: state
	}
}