import React, {Component}  from 'react';
import {bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {Player} from '../../ApiCalls';
import {updateToaster} from '../../actions/shared';
import {playerModel} from '../../models';
import PlayerForm from '../../presentational/player/PlayerForm';

class PlayerNew extends Component{

    constructor(props){
        super(props);
        this.state = playerModel
    }
    createPlayer(e){
        e.preventDefault();
        Player.create(this.state)
        .then(data => {
            console.log(data);
            if (data.errors === undefined){
                this.props.history.push(`/player/${data.player.id}`);
                this.props.updateToaster({open:true, variant: 'success', message: data.meta.message});
            }else{
                this.props.updateToaster({open:true, variant: 'erorr', message: data.errors});
            }
        });
    }

    render(){
        return (
            <div className="container">
                <PlayerForm state={this.state} context={this} formAction='create' formSubmitHandler={this.createPlayer}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateToaster
  },dispatch)
)

export default connect(null,mapDispatchToProps)(PlayerNew);