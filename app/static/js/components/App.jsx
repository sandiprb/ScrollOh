import React from 'react';
import Store from '../store/Store.jsx'

import Article from './articles/Articles.jsx'

class App extends React.Component {
	constructor(){
		super();
		this.getArticles = this.getArticles.bind(this)
		this.state = {
			articles: []
		}
	}

	componentWillMount(){
		Store.on('change', this.getArticles);
	}

	componentWillUnmount(){
		Store.removeListener('change', this.getArticles);
	}

	componentDidMount(){
		this.setState({articles: Store.getArticles()})
	}

	getArticles(){
		this.setState({articles: Store.getArticles()})
	}

	render(){
		const articles = !this.state.articles ? null : this.state.articles.map((article, index) => ( <Article key={index} {...article} /> ));
		return (
			<div>
				{articles}
			</div>
			);
	}
}

module.exports = App;