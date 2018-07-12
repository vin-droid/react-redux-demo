import React, { Component } from 'react';
import SearchRecipe from './SearchRecipe';
import RecipeItem from './../presentational/RecipeItem';

class Recipes extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	items: props.items
	  };
	}
  render() {
    let recipeItems;
    if(this.props.recipes){    
      recipeItems = this.props.recipes.map(recipeItem => {
        return(
          <RecipeItem recipeItem={recipeItem} />
        );
      });
    }

    return (
      <div>
        {recipeItems}
      </div>
    );
  }
}

export default Recipes;
