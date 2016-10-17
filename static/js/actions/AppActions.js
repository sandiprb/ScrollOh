import dispatcher from '../dispatcher/dispatcher';
import AppConstants from '../constants/AppConstants';

const AppActions = {
	getVenues: function () {
		dispatcher.dispatch({
			type: AppConstants.GET_ARTICLES
		})
	},
	loadOnScroll: function () {
		dispatcher.dispatch({
			type: AppConstants.LOAD_ON_SCROLL,
		})
	}
}

module.exports = AppActions;
