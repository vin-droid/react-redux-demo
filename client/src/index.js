import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger'
import initState from './initState';
import {RecipeApp} from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter,Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Player from './components/player/Player';
import Root from './components/layout/Root';
import 'bulma/css/bulma.css';

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
		<Root>
            <div>
              <Route exact path='/' component={Home}/>
              <Route  path='/player' component={Player}/>
            </div>
        </Root>
	</BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
