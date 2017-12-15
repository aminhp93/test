import React from 'react';
import { connect } from 'react-redux';

import { itemsFetchData } from '../actions/index';
import Header from './Header';


const mapStateToProps = (state) => {
	console.log(2, 'mapStateToProps')
	console.log(state)
	return {
		isLoading: state.items.isLoading
	}
}

// const mapDispatchToProps = (dispatch) => ({
// 	fetchData: () => {
// 		dispatch(itemsFetchData())
// 	}
// })

class ItemList extends React.Component {
	constructor(props){
		super(props);
		console.log(4, this.props);
	}
 
	render() {
		console.log(5, 'render', this.props.isLoading)

		if (this.props.isLoading){
			return <p>Is Loading ...</p>
		}

		return (

			<div>
				<Header></Header>
				ItemList Content
			</div>
		);
	}

	componentDidMount(){
		console.log(6, 'componentDidMount')
        // this.props.fetchData('http://599167402df2f40011e4929a.mockapi.io/items')
	}
}



export default connect(mapStateToProps, null)(ItemList);
