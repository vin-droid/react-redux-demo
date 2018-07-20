import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = {
	card: {
	  maxWidth: 345,
	},
	media: {
	  height: 0,
	  paddingTop: '56.25%', // 16:9
	},
  };
  
const RecipeItem = ({recipeItem}) => { 
	return(
		<div className="container">
			<Card style={styles.card}>
				<CardMedia
					style={styles.media}
					image={recipeItem.avatar_url}
					title={recipeItem.login}
				/>
				<CardContent>
					<Typography variant="headline">{recipeItem.login}</Typography>
					<Divider/>
					<Typography variant="subheading" color="textSecondary">
					{recipeItem.score}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export default RecipeItem;