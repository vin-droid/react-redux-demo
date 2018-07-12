import React, { Component } from 'react';
import SearchRecipe from './SearchRecipe';
import Recipes from './Recipes';

class Home extends Component {
  render() {
    return (
      <div>
        <SearchRecipe />
        <Recipes />
      </div>
    );
  }
}

export default Home;
