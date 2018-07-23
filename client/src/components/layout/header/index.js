import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';


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
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/player'>Roster</Link></li>
                            <li><Link to='/team'>Schedule</Link></li>
                        </ul>
                    </nav>
                    <Button>
                    <div>Button 1</div>
                    </Button>
                    <Button>
                    <div>Button 2</div>
                    </Button>
                </div>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header; 