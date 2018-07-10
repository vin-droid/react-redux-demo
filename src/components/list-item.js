import React, { Component } from 'react';
import SearchUI from './search-ui';
import ListItemUI from './../presentaional/list-item-ui';

class ListItem extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	items: this.props.items;
	  };
	}
  render() {
  	const {items} = this.state;
    return (
      <div>
        {
        	items.map(
        		(item) => <ListItemUI data=item/> 

        		);
        }
      </div>
    );
  }
}

export default Home;
