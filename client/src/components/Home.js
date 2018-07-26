import React, { Component } from 'react';
import SearchRecipe from './SearchRecipe';
import Recipes from './Recipes';
import {connect} from 'react-redux';

class Home extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <SearchRecipe  />
        <Recipes items={this.props.recipes} />
      </div>
    );
  }
}

const mapStateToProps = ({recipes}) => {
  return {
  recipes: recipes
  }
}
export default connect(mapStateToProps)(Home);

