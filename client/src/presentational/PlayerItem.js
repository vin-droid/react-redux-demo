import React from 'react';
  
const PlayerItem = ({playerItem}) => { 
	return(
		<div className="container">
			{playerItem.first_name}
		</div>
	);
};

export default PlayerItem;