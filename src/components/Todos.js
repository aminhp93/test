import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addItem } from '../actions/index.js';

class Todos extends Component {

	constructor(props){
		super(props);
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
	}

	handleOnSubmit(e){
		e.preventDefault();
		this.props.addItem(this.textInput.value)
		this.textInput.value = ''
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
				
				{this.props.todoList.map((item) => {
					return (
						<li key={item.id}>{item.title}</li>
					)
				})}

			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		todoList: state.todos
	}
}

const mapDispatchToProps = {
	addItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)