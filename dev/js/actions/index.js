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