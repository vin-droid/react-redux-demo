import React, { Component } from 'react';
import {debounce}  from "../Utility";

class SearchRecipe extends Component{

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	query: ''
	  };
  	this.keyPressHandler = this.keyPressHandler.bind(this);
		this.hitGitApi = debounce(this.hitApi.bind(this),600);
	}

	keyPressHandler(event){
		this.setState({query: event.target.value},() => {
			this.hitGitApi();
		});
	}

	hitApi() {
		fetch('http://localhost:4000/api/search-github-users/?username=' + this.state.query)
		.then(results => {
			console.log(results);
			return results.json();
		}).then(data =>{
			console.log(data);
		})
	}


	render(){
		return (
	      <div>
	        <input type='text' name='title'  defaultValue={this.state.query}  onChange={this.keyPressHandler}/>
	      </div>
	    );
	}
}


export default SearchRecipe;