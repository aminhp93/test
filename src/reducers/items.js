export default (state = {}, action) => {
	console.log(1, 'itemsIsLoading', action)
	switch(action.type){
		case 'LOADING':
			return {
				...state,
				isLoading: true,
				url: action.url
			}
		default:
			return state
	}
}