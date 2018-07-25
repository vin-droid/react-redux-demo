import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger'
import {RecipeApp} from './reducers/recipe';
import registerServiceWorker from './registerServiceWorker';
import 'bulma/css/bulma.css';
import {routes as Routes} from './routes';

// import 'bootstrap/dist/css/bootstrap.css';

const store = (() => {
	if (process.env.NODE_ENV === 'production'){
		return createStore(RecipeApp);
	}else{
		return createStore(RecipeApp,applyMiddleware(logger));
	}
})();

ReactDOM.render(
<Provider store={store}>
	<div>
		<Routes/>
	</div>	
</Provider>, document.getElementById('root'));
registerServiceWorker();
