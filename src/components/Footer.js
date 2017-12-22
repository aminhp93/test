import React, { Component } from 'react';

import FilterLink from './FilterLink';


class Footer extends Component {
	render() {
		return (
			<div>
				<FilterLink filter="SHOW_ALL">
					All
				</FilterLink>
				<FilterLink filter="SHOW_COMPLETED">
					Completed
				</FilterLink>
				<FilterLink filter="SHOW_ACTIVE">
					Active
				</FilterLink>
			</div>
		);
	}
}

export default Footer