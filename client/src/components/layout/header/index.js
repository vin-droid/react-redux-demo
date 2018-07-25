import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


class Header  extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <AppBar position="static">
                <Toolbar variant="dense">
                <Typography variant="title" color="inherit">
                    Users
                </Typography>
                <div>
                    <nav>
                        <ul>
                            <li><NavLink activeClassName='active' to='/'>Home</NavLink></li>
                            <li><NavLink activeClassName='active' to='/player'>Player</NavLink></li>
                            <li><NavLink activeClassName='active' to='/players'>Players</NavLink></li>
                            <li><NavLink activeClassName='active' to='/team'>Team</NavLink></li>
                        </ul>
                    </nav>
                </div>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header; 