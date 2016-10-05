import dispatcher from '../dispatcher/dispatcher';
import AppConstants from '../constants/AppConstants';

const AppActions = {
	getVenues: function (data) {
		dispatcher.dispatch({
			type: AppConstants.GET_ARTICLES,
			data: data
		})
	}
}

module.exports = AppActions;
