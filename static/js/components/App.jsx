import React from 'react';
import Store from '../store/Store.jsx';

import Article from './articles/Articles.jsx';
import Actions from '../actions/AppActions.js';

class App extends React.Component {
	constructor(){
		super();
		this.getArticles = this.getArticles.bind(this)
		this.state = {
			articles: [],
		}
	}

	componentWillMount(){
		Store.on('change', this.getArticles);
	}

	componentWillUnmount(){
		Store.removeListener('change', this.getArticles);
		window.removeEventListener('scroll', this.handleScroll);
	}

	componentDidMount(){
		this.setState({articles: Store.getArticles()})
		window.addEventListener('scroll', this.handleScroll);
	}

	getArticles(){
		this.setState({articles: Store.getArticles()})
	}

	handleScroll(){
		var h = document.documentElement, 
		b = document.body,
		st = 'scrollTop',
		sh = 'scrollHeight';
		var scroll = h[st]||b[st] / ((h[sh]||b[sh]) - h.clientHeight) * 100
		if(scroll > 85){
			Actions.loadOnScroll()
		}
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