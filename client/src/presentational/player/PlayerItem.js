import React from 'react';
import {NavLink} from 'react-router-dom';
  
const PlayerItem = ({playerItem}) => { 
	return(
		<div className="box">
			<article className="media">
				<div className="media-left">
				<figure className="image is-64x64">
					<img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"></img>
				</figure>
				</div>
				<div className="media-content">
				<div className="content">
					<p>
					<strong>{playerItem.first_name} {playerItem.last_name}</strong> <small>{playerItem.country_name}</small> <small>31m</small>
					<br></br>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
					</p>
				</div>
				<nav className="level is-mobile">
					<div className="level-left">
					<NavLink to= {`/player/${playerItem.id}`} aria-label="like" className="level-item button">View</NavLink>
					<NavLink to= {`/player/${playerItem.id}/edit`} className="button">Edit</NavLink>
					</div>
				</nav>
				</div>
			</article>
		</div>
	);
};

export default PlayerItem;