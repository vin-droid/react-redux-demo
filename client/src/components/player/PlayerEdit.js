import React, {Component}  from 'react';
import {bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {Player} from '../../ApiCalls';
import {updateToaster} from '../../actions/shared';
import {playerModel} from '../../models';
import {PlayerForm} from '../../presentational/player/PlayerForm';

class PlayerEdit extends React.Component{

    constructor(props){
        super(props);
        this.state = playerModel;
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
    updatePlayer(e){
        e.preventDefault();
        Player.update(this.state)
        .then(data => {
            if (data.errors === undefined){
                this.props.updateToaster({open:true, variant: 'success', message: data.meta.message, duration: 1000});
                this.props.history.push(`/player/${this.state.id}`);
            }else{
                this.props.updateToaster({open:true, variant: 'erorr', message: data.errors, duration: 2000});
            }
        });
    }

    render(){
        return (
            <div className="container">
                <PlayerForm state={this.state} context={this} formAction='update' formSubmitHandler={this.updatePlayer}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateToaster
  },dispatch)
)

export default connect(null,mapDispatchToProps)(PlayerEdit);