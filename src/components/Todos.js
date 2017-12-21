import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addItem, toggleTodo } from '../actions/index.js';

class Todos extends Component {

	constructor(props){
		super(props);
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
	}

	handleOnSubmit(e){
		e.preventDefault();
		this.props.addItem(this.textInput.value)
		this.textInput.value = '';
	}

	render() {
		return (
			<div>
				<h1>Todos</h1>
				<form onSubmit={this.handleOnSubmit}>
					<input ref={ (input) => {
						this.textInput = input
					}}/>
					<button type='submit'>Add Todo</button>
				</form>

				<ul>
					{this.props.todoList.map((item) => {
						return (
							<li 
								key={item.id}
								onClick={() => this.props.toggleTodo(item.id)}
								style={{ textDecoration: item.completed ? 'line-through' : 'none'}}>
								{item.title} {item.completed}
							</li>
						)
					})}
				</ul>

			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		todoList: state.todos,
		completed: state.completed
	}
}

const mapDispatchToProps = {
	addItem,
	toggleTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)