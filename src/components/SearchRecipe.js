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
		fetch('http://www.recipepuppy.com/api/?q=' + query, { mode: 'no-cors' })
		.then(results => {
			console.log(results);
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