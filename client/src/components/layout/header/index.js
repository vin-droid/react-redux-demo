import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';
import Toaster from '../../Toaster';



class Header  extends Component{

    render(){
        return(
            <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                <Typography variant="title" color="inherit">
                    Users
                </Typography>
                <div>
                    <nav>
                        <ul>
                            <li><NavLink activeClassName='active' to='/'>Home</NavLink></li>
                            <li><NavLink activeClassName='active' to='/players'>Players</NavLink></li>
                            <li><NavLink activeClassName='active' to='/team'>Team</NavLink></li>
                        </ul>
                    </nav>
                </div>
                </Toolbar>
            </AppBar>
            <Toaster toasterOpts={this.props.toasterOpts}/>
            </div>
        )
    }
}
const mapStateToProps = ({toasterOpts}) => {
    return {
    toasterOpts: toasterOpts
    }
  } 
export default connect(mapStateToProps)(Header);