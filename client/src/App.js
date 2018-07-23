import React, { Component } from 'react';
import Home from './components/Home';
import Player from './components/player/Player';
import { BrowserRouter,Route} from 'react-router-dom'
import './App.css';
import Root from './components/layout/Root';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Root>
          <BrowserRouter >
            <div>
              <Route exact path='/' component={Home}/>
              <Route path='/player' component={Player}/>
              {/* <Route path='/team' component={Team}/> */}
            </div>
          </BrowserRouter>
        </Root>
      </div>
    );
  }
}

export default App;
