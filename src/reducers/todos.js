export default (state = [], action) => {
	console.log(2, action)
	switch (action.type){
		case 'ADD_ITEM':
			return [
				...state,
				{ 
					id: action.id, 
					title: action.text,
					completed: false
				}
			]
		case 'TOGGLE_TODO':
			return state.map(todo =>
				(todo.id === action.id)
					? {...todo, completed: !todo.completed}
					: todo
			)
		default:
			return state
	}
}