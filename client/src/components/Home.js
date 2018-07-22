import React, { Component } from 'react';
import {connect} from 'react-redux';
import SearchRecipe from './SearchRecipe';
import Recipes from './Recipes';
import Toaster from './Toaster';


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
        <Toaster toasterOpts={this.props.toasterOpts}/>
      </div>
    );
  }
}

const mapStateToProps = ({recipes, searchKey, toasterOpts}) => {
  return {
  searchKey: searchKey,
  recipes: recipes,
  toasterOpts: toasterOpts
  }
}

export default connect(mapStateToProps)(Home);

