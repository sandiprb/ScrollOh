import React from 'react';
import Store from '../store/Store.jsx'


class App extends React.Component {
	constructor(){
		super();
		this.getArticles = this.getArticles.bind(this)
		this.state = {
			articles: Store.getArticles()
		}
	}

	componentWillMount(){
		Store.on('change', this.getArticles);
	}

	componentWillUnmount(){
		Store.removeListener('change', this.getArticles);
	}

	getArticles(){
		this.setState({articles: Store.getArticles()})
	}

	render(){
		console.log(this.state)
		return (
			<div>
			</div>
			);
	}
}

module.exports = App;