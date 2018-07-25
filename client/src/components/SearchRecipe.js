import React, { Component } from 'react';
import {debounce}  from "../Utility";
import {bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {fetchUsers} from '../ApiCalls';
import {updateSeachKey, updateRecipes, updateToaster} from '../actions/recipe';
import {RecipeApp} from '../reducers/recipe';
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
		let msgObj = {};
		if (this.state.query === ''){
			msgObj = {message: `Type Username`, variant: 'info'}
			this.props.updateToaster({open:true, variant: msgObj.variant, message: msgObj.message});
			this.props.updateRecipes([]);
		}else{
			fetchUsers({query: this.state.query})
			.then(results => {
				console.log(results);
				return results.json();
			}).then(data =>{
				if (data === undefined){
					this.props.updateRecipes([]);
					msgObj = {message: `No user found with username ${this.state.query}`, variant: 'error'}
				}else if(data.result.items === undefined){
					this.props.updateRecipes([]);
					msgObj = {message: data.result.message + "       : Please Refresh the Page ", variant: 'error'}
				} else {
					msgObj = {message: `fetched users! per_page: ${data.result.items.length} total_count: ${data.result.total_count}`, variant: 'success'}
					if (data.result.total_count === 0 ){
						msgObj = {message: `No user found with username ${this.state.query}`, variant: 'warning'}
					}
					this.props.updateRecipes(data.result.items);
				}
				this.props.updateToaster({open:true, variant: msgObj.variant, message: msgObj.message});
				this.props.updateSeachKey(this.state.query);

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

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateSeachKey,
    updateRecipes,
    updateToaster
  },dispatch)
)

export default connect(null,mapDispatchToProps)(SearchRecipe);