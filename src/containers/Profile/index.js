import React, {Component} from 'react';
import './index.less'
import profile from '../../images/profile.png';
// import atu from '../../images/11.png';
import {HashRouter as Router, Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';

import {connect} from 'react-redux';
import actions from '../../store/actions/session';
//装饰者模式
@connect(
    state=>state.session,
    actions
)

export default class Profile extends Component {

    handleClick=(e)=>{
        e.preventDefault();
        <Redirect to={{pathname: "/login"}}/>
    }

    render() {
        return (
            <Router>
                <div>
                    <div className="profile">
                        <div className="user-login">

                            <div className="wai"></div>
                            <span className="nei"><img src="http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg" alt=""/></span>
                            {
                                this.props.user?<span className="welcome">欢迎~{this.props.user.mobile}</span>:
                                <button  className="inp-1" > <NavLink  exact to="/login">手机号登陆</NavLink></button>
                            }
                            {
                                this.props.user?<button  onClick={this.handleClick} className="inp-2" > <NavLink  exact to="/login">退出</NavLink></button>:<button  className="inp-2" > <NavLink  exact to="/register">注册</NavLink></button>
                            }

                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}