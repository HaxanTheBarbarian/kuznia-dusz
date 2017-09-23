import React, {Component} from 'react';
import {connect} from 'react-redux'

import SideBar from './navbar/side-bar'
import Content from './content'
import TopNavBar from './navbar/top-bar'
import './navbar.css'
class Main extends Component {

    componentDidUpdate() {
        if (!this.props.loggedIn) {
            this.history.push("/login")
        }
    }

    componentWillMount() {
        if (!this.props.loggedIn) {
            this.props.history.push("/login")
        }
    }

    render() {
        return (
            <div className="container">
                <TopNavBar/>
                <div className="container-fluid">
                    <div className="row">
                        <SideBar/>
                        <Content/>
                    </div>
                </div>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {loggedIn: state.loggedIn}
}

export default connect(mapStateToProps)(Main);