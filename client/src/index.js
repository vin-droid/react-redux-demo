import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger'
import initState from './initState';
import {RecipeApp} from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

const store = (() => {
	if (process.env.NODE_ENV === 'production'){
		return createStore(RecipeApp);
	}else{
		return createStore(RecipeApp,applyMiddleware(logger));
	}
})();

ReactDOM.render(
<Provider store={store}>
	<BrowserRouter>
		<App />
	</BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
