import { createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger'
import {RecipeApp} from './reducers/recipe';
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);



const store = (() => {
	if (process.env.NODE_ENV === 'production'){
		return createStore(RecipeApp);
	}else{
		return createStore(RecipeApp,applyMiddleware(myRouterMiddleware, logger));
	}
})();

export default store;
