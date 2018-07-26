import React, { Component } from 'react';
import RecipeItem from './../presentational/RecipeItem';

class Recipes extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	items: this.props.items || []
	  };
  }

  componentWillReceiveProps(props) {
    this.setState( {
      items: props.items
    });
  }
  
  render() {
    const recipeItems = this.state.items.map(recipeItem => {
      return(
          <li key= {recipeItem.id}>
            <RecipeItem recipeItem={recipeItem} />
          </li>
        );
      }
    );
    
    return (
      <div>
        <ul>
        {recipeItems}
        </ul>
      </div>
    );
  }
}

export default Recipes;
