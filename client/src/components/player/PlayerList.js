import React, {Component}  from 'react';
import {Player} from '../../ApiCalls';
import {bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {updatePlayerList} from '../../actions/player';


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
            console.log(data);
            this.props.updatePlayerList(data.players);
            console.log(this.state.players)
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
        updatePlayerList
    },dispatch)
  )


export default connect(null,mapDispatchToProps)(PlayerList);