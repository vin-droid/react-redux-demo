import React, { Component } from 'react';
import RecipeItem from './../presentational/RecipeItem';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

  handlePageClick(){

  }
  
  render() {
    const recipeItems = this.state.items.map(recipeItem => {
      return(
        <Grid item xs={6} sm={3} key= {recipeItem.id}>
          <Paper><RecipeItem recipeItem={recipeItem} /></Paper>
        </Grid>
      );
    });
    
    return (
      <div>
        <Grid container spacing={24}>
        {recipeItems}
        </Grid>
      </div>
    );
  }
}

export default Recipes;
