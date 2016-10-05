import {EventEmitter} from 'events';
import dispatcher from '../dispatcher/dispatcher'
import API from './API'


class AppStore extends EventEmitter{

	constructor(){
		super()
		this.articles = []
	}

	getArticles(data){
		if (this.articles.length > 0){
			return this.articles;
		}else{			
			API.getArticles((function(response){
				this.articles = response.result;
				this.emit("change");
			}).bind(this));
		}
	}

	handleAction(action){
		switch (action.type){
			case "GET_ARTICLES": {
				this.getVenues(action.data)
			}
			break;
		}
	}
}
const appStore = new AppStore;
dispatcher.register(appStore.handleAction.bind(appStore));
export default appStore;