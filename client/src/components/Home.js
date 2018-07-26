import React, { Component } from 'react';
import SearchRecipe from './SearchRecipe';
import Recipes from './Recipes';

class Home extends Component {
  
  render() {
    const styles = theme => ({
      root: {
        flexGrow: 1,
      }});
    const toasterOpts = {open: true}
    return (
      <div style={styles.root}>
        <SearchRecipe  />
        <Recipes items={this.props.recipes} />
      </div>
    );
  }
}

export default Home;

