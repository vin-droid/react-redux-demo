import React, {Component} from 'react';
import Header from './header';
import Footer from './footer';
import Toaster from '../Toaster';
import {connect} from 'react-redux';

// import Team from '../Team';

class Root extends Component {
    render() {
        return (
            <div>
                <Header />
                    {this.props.children}
                <Footer />
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
export default connect(mapStateToProps)(Root);