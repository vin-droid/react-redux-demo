import React, {Component}  from 'react';
import {Player} from '../../ApiCalls';
import {bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {fetchPlayers} from '../../actions/player';


class PlayerList extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            players: []
        }
    }


    componentWillMount(){
        Player.all(1)
        .then(data => {
            console.log(data);
            this.props.fetchPlayers(data.players);
            // this.props.fetchPlayers(data.result.items);
        });
    }

    render(){
        return (
            <div>
                {
                    this.state.players.map( player => <div>{player.first_name}</div>)
                }
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
      fetchPlayers
    },dispatch)
  )


export default connect(null,mapDispatchToProps)(PlayerList);