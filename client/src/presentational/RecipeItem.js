import React, {Component} from 'react';

const RecipeItem = (props) => { 
	return(
		<div>
			<strong><li>{props.recipeitem.title}</li></strong>
			<li>{props.recipeitem.href}</li>
			<ol>
				{
					props.recipeitem.ingredients.map(ingredient => {
						return(
							<li>{ingredient}</li>
						)
					})	
				}
			</ol>
		</div>
	);
};

export default RecipeItem;