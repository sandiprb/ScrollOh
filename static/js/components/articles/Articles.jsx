import React from 'react';

class Article extends React.Component{
	constructor(){
		super()
	}

	render(){
		let article = this.props.articles
		article = article[0]
		return(
			<article className="article clearfix">
				<div className="col-sm-10 col-sm-offset-1">
					<div className="clearfix card_base list_wrapper">
						<div className="col-sm-3">
							<img src={article.cover.thumbnail} alt={article.title} className="article-img" />
						</div>
						<div className="col-sm-9">
							<div className="category">{article.topic.title}</div>
							<h4> <a href={article.permalink}> {article.title} </a> </h4>
							<div className="author"> {article.authors[0].name} • {article.created} </div>
							<p className="summary">{article.summary}</p>
						</div>
					</div>
				</div>
			</article>
			)
	}
}

module.exports = Article