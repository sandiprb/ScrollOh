import {EventEmitter} from 'events';
import dispatcher from '../dispatcher/dispatcher'
import API from './API'


class AppStore extends EventEmitter{

	constructor(){
		super()
		this.pageNo = 1; //always start with first page
		this.articles = []
	}

	getArticles(data){
		if (this.articles.length > 0){
			return this.articles;
		}else{
			API.getArticles(this.pageNo, (function(response){
				this.articles = response.result;
				this.emit("change");
			}).bind(this));
		}
	}

	loadOnScroll(){
		this.pageNo ++;
		API.getArticles(this.pageNo, (function(response){
			this.articles = (this.articles).concat(response.result);
			this.emit("change");
		}).bind(this));
	}

	handleAction(action){
		switch (action.type){
			case "GET_ARTICLES": {
				this.getVenues(action.data)
			}
			break;
			case "LOAD_ON_SCROLL": {
				this.loadOnScroll()
			}
			break;
		}
	}
}
const appStore = new AppStore;
dispatcher.register(appStore.handleAction.bind(appStore));
export default appStore;