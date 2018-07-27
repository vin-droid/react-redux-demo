import React, {Component}  from 'react';
import PlayerDetails from '../../presentational/player/PlayerDetails';
import {Player} from '../../ApiCalls';
import {playerModel} from '../../models';



class PlayerShow extends Component{
    
    constructor(props){
        super(props)
        this.state = playerModel
    }


    componentWillMount(){
        Player.show(this.props.match.params.playerId).
        then(data => {
            let {id, first_name, last_name, state_name, country_name, game} = data.player
            this.setState({
                id,
                first_name,
                last_name,
                state_name,
                country_name,
                game,
            })
        })
    }

    render(){
        return (
            <div>
                <PlayerDetails state={this.state}/>
            </div>
        );
    }
}


export default PlayerShow;