export const activateGeod = geod => ({
  type: 'ACTIVATE_GEOD',
  geod
});

export const closeGeod = () => ({
  type: 'CLOSE_GEOD',
});

let nextTodoId = 0
export const addItem = function(text){
	return {
		type: 'ADD_ITEM',
		id: nextTodoId++,
		text
	}
}

export const toggleTodo = (id) => ({
	type: 'TOGGLE_TODO',
	id
})

export const setVisibilityFilter = function(filter){
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
}

