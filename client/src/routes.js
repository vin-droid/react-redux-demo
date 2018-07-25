import React  from 'react';
import Home from './components/Home';
import Player from './components/player/PlayerNew';
import PlayerList from './components/player/PlayerList';
import {BrowserRouter, Route} from 'react-router-dom';
import Root from './components/layout/Root';


export const routes = () => (
  <BrowserRouter>
    <Root>
      <Route exact path='/' component={Home}/>
      <Route  path='/player' component={Player}/>
      <Route  path='/players' component={PlayerList}/>
    </Root>
  </BrowserRouter>
)
