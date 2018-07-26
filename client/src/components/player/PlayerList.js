import React, {Component}  from 'react';
import {Player} from '../../ApiCalls';
import {bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {updatePlayerList} from '../../actions/player';
import PlayerItem from '../../presentational/player/PlayerItem';


class PlayerList extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            players: this.props.players || []
        }
    }

    componentWillMount(){
        Player.all(1)
        .then(data => {
            this.props.updatePlayerList(data.players);
            this.setState({
                players: data.players
            });
        });
    }

    render(){
        const players = this.state.players.map( player => (
                <div key = {player.id}>
                    <PlayerItem playerItem={player}/>
                </div>
            ))
        return (
            <div className="columns">
                <div className="column">
                <NavLink to='/player' className="button">Create Player</NavLink>
                {players}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        updatePlayerList
    },dispatch)
  )
  const mapStateToProps = ({players}) => {
      return {
      players: players
      }
    }
  export default connect(mapStateToProps,mapDispatchToProps)(PlayerList);