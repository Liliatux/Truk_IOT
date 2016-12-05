export const ChangeStatus =  (state, value) => {
	console.log("CHANGE-STATUS");
	return {
		type: "CHANGE-STATUS",
		playload: state,
		value: value
	}

}