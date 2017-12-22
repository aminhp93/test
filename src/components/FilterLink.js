import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setVisibilityFilter } from '../actions/index';


class FilterLink extends Component {
	constructor(props){
		super(props)
		this.handleOnClick = this.handleOnClick.bind(this);

	}

	handleOnClick(filter){
		this.props.setVisibilityFilter(filter)
	}

	render() {
		if (this.props.active){
			return (
				<span>{this.props.children}</span>
			)
		}

		return (
			<div>
				<a 
					href="#" 
					onClick={() => this.handleOnClick(this.props.filter)}>
					{this.props.children}
				</a>
			</div>
		);
	}
}

const mapStateToProps = (state, filter) => {
	return {
		active: state.visibilityFilter === filter.filter
	}
}

const mapDispatchToProps = {
	setVisibilityFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);