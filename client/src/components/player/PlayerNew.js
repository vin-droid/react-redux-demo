import React, {Component}  from 'react';
import {fieldChangeHandler} from '../../CommonHelper';
import {Player} from './../../ApiCalls';

class PlayerNew extends Component{

    constructor(props){
        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            state_name: '',
            country_name: '',
            game: '',
        }
    }
    createPlayer(e){
        e.preventDefault();
        Player.create(this.state);
    }

    render(){
        return (
            <div className="container">
                <form onSubmit={(e) => this.createPlayer.bind(this,e)()}>
                    <div className="field">
                        <label className="label">First Name</label>
                        <div className="control">
                            <input className="input"
                                name='first_name'
                                type="text" 
                                placeholder="Enter first name" 
                                value={this.state.first_name} 
                                onChange={(e) => { console.log(this); return fieldChangeHandler.call(this,e);}}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Last Name</label>
                        <div className="control">
                            <input className="input"
                                name='last_name'
                                type="text" 
                                placeholder="Enter last name" 
                                value={this.state.last_name} 
                                onChange={(e) => { console.log(this); return fieldChangeHandler.call(this,e);}}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">State</label>
                        <div className="control">
                            <input className="input"
                                name='state_name'
                                type="text" 
                                placeholder="Enter state" 
                                value={this.state.state_name} 
                                onChange={(e) => { console.log(this); return fieldChangeHandler.call(this,e);}}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Country</label>
                        <div className="control">
                            <input className="input"
                                name='country_name'
                                type="text" 
                                placeholder="Enter country name" 
                                value={this.state.country_name} 
                                onChange={(e) => { console.log(this); return fieldChangeHandler.call(this,e);}}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Game</label>
                        <div className="control">
                            <input className="input"
                                name='game'
                                type="text" 
                                placeholder="Enter country name" 
                                value={this.state.game} 
                                onChange={(e) => { console.log(this); return fieldChangeHandler.call(this,e);}}
                            />
                        </div>
                    </div>
                    <div className="control">
                        <button className="button is-primary" type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default PlayerNew;