import React, { Component } from 'react';
import {debounce}  from "../Utility";
import {bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {fetchUsers} from '../ApiCalls';
import {updateSeachKey, updateRecipes} from '../actions';
import {RecipeApp} from '../reducers';
import {Button, Input} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

class SearchRecipe extends Component{

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	query: ''
	  };
  	this.keyPressHandler = this.keyPressHandler.bind(this);
		this.hitGitApi = debounce(this.hitApi.bind(this),200);
	}

	keyPressHandler(event){
		this.setState({query: event.target.value},() => {
			this.hitGitApi();
		});
	}

	hitApi() {
		if (this.state.query === ''){
			this.props.updateRecipes([]);
		}else{
			fetchUsers({query: this.state.query})
			.then(results => {
				return results.json();
			}).then(data =>{
				console.log("priting data");
				console.log(data);
				this.props.updateSeachKey(this.state.query);
				this.props.updateRecipes(data.result.items);
			});
		}
	}


	render(){
		return (
	      <div>
			<TextField
			id="multiline-static"
			label="Search Github User"
			multiline
			rows="1"
			defaultValue=""
			margin="normal"
			name='title'
			onChange={this.keyPressHandler}
			/>
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

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateSeachKey,
    updateRecipes
  },dispatch)
)

export default connect(mapStateToProps,mapDispatchToProps)(SearchRecipe);