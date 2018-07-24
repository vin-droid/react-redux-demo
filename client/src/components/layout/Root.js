import React, {Component} from 'react';
import Header from './header';
import Footer from './footer';
// import Team from '../Team';

class Root extends Component {
    render() {
        return (
            <div>
                <Header />
                    {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default Root;