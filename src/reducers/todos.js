export default (state = [], action) => {
	console.log(2, action)
	switch (action.type){
		case 'ADD_ITEM':
			return [
				...state,
				{ id: action.id, title: action.text }
			]
		default:
			return state
	}
}