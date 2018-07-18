import React, { Component } from 'react';

class SearchRecipe extends Component{

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	query: ''
	  };
  	this.keyPressHandler = this.keyPressHandler.bind(this);
	}

	keyPressHandler(event){
		let query =  this.state.query + event.key;
		this.setState({query: query});
		console.log(this.state.query);
		fetch('http://localhost:4000/api/search-recipe/?q=' + query)
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
	        <input type='text' name='title'  defaultValue={this.state.query}  onKeyPress={this.keyPressHandler}/>
	      </div>
	    );
	}
}


export default SearchRecipe;