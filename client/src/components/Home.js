import React, { Component } from 'react';
import {connect} from 'react-redux';
import SearchRecipe from './SearchRecipe';
import Recipes from './Recipes';


class Home extends Component {
  
  render() {
    const styles = theme => ({
      root: {
        flexGrow: 1,
      }});
    return (
      <div style={styles.root}>
        <SearchRecipe  />
        <Recipes items={this.props.recipes} />
      </div>
    );
  }
}

const mapStateToProps = ({recipes,searchKey}) => (
  {
  searchKey: searchKey,
  recipes: recipes
  }
)

export default connect(mapStateToProps)(Home);

