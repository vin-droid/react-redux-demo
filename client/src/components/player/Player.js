import React, {Component}  from 'react';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    }
  });
  

class Player extends Component{

    constructor(props){
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            stateName: '',
            countryName: '',
            game: '',
        }
    }

    changeHandler(e){
        console.log(e.state);
    }
    
    createUser(e){
        e.preventDefault();
        debugger;
        console.log(e.targent.value);
    }

    render(){
        return (
            <div className="container">
                <form onSubmit={(e) => this.createUser(e)}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Text input"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success" type="text" placeholder="Text input" value={this.state.firstName} onChange={(e)=>(this.setState({firstName: e.target.value}))} />
                            <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                            </span>
                            <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                            </span>
                        </div>
                        <p className="help is-success">This username is available</p>
                    </div>
                </form>
            </div>
        );
    }
}


export default Player;