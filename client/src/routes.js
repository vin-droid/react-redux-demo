import React  from 'react';
import Home from './components/Home';
import PlayerNew from './components/player/PlayerNew';
import PlayerList from './components/player/PlayerList';
import PlayerShow from './components/player/PlayerShow';
import PlayerEdit from './components/player/PlayerEdit';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Root from './components/layout/Root';


export const routes = () => (
  <BrowserRouter>
    <Root>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/player' component={PlayerNew}/>
        <Route exact path='/players' component={PlayerList}/>
        <Route exact path='/player/:playerId' component={PlayerShow}/>
        <Route exact path='/player/:playerId/edit' component={PlayerEdit}/>
      </Switch>
    </Root>
  </BrowserRouter>
)
