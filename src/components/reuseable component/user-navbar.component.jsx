import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

import logo from '../../styles/images/pogo.png';
import userDefault from '../../styles/images/userimg.png';
import '../../styles/entryNav.style.css';
import '../../styles/userAdminNavbar.style.css';

class EntryNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            decoded: {},
        };
    }

    componentDidMount() {
        let token = localStorage.getItem('token');
        if (!token) {
            window.location = '/sign-in';
        }
        const decoded = jwt_decode(token);
        this.setState({ decoded: decoded });
    }
    openNav() {
        document.getElementById('mySidenav').style.width = '250px';
        document.getElementById('mySidenav').style.height = '600px';
    }
    closeNav() {
        document.getElementById('mySidenav').style.width = '0';
    }
    render() {
        const style5 = {
            fontSize: '30px'
        };
        const style1 = {
            width: '80px',
            paddingLeft: '30px',
        };
        const style2 = {
            paddingLeft: '30px',
            color: '#ffffff',
        };
        const style3 = {
            fontSize: '30px',
            cursor: 'pointer',
            height: '30px',
        };

        const { focus, focusColor } = this.props;
        const path = this.props.props.location.pathname

        const { decoded } = this.state;
        return (
            <React.Fragment>
                <div className="user-admin-container">
                    <nav className="entry-nav">
                        <a className="entry-nav-logo-link" href={'/parties'}><img className="entry-nav-logo" src={logo} /></a>
                        <ul className="entry-nav-list-head">
                            <li className="entry-nav-list"><a className="entry-nav-list-child" href={'/parties'}>Home</a></li>
                            <li className="entry-nav-list active" style={path == "/parties" ? focus : null }><a className="entry-nav-list-child" href={'/parties'} style={path == "/parties" ? focusColor : null}>Parties</a></li>
                            <li className="entry-nav-list" style={path == "/candidates" ? focus : null }><a className="entry-nav-list-child" href={'/candidates'} style={path == "/candidates" ? focusColor : null}>Candidates</a></li>
                            <li className="entry-nav-list" style={path == "/result" ? focus : null }><a className="entry-nav-list-child" href={'/result'} style={path == "/result" ? focusColor : null}>Results</a></li>
                            <li className="entry-nav-list" style={path == "/sign-out" ? focus : null }><a className="entry-nav-list-child" href={'/sign-out'} style={path == "/sign-out" ? focusColor : null}>Sign-out</a></li>
                            <a className="entry-nav-list-child-another">{decoded.userName}</a>
                        </ul>
                    </nav>
                </div>
                <div className="navbar-mobile">
                    <div id="mySidenav" className="sidenav" >
                        <a href="#" className="closebtn" onClick={this.closeNav} ><i className="fa fa-chevron-circle-right" /></a>
                        <img style={style1} src={userDefault} />
                        <a className="entry-nav-username"><span>{decoded.userName}</span></a>
                        <a className="entry-nav-username"><span>{decoded.lastName}</span></a>
                        <h1 id="nameside" style={style2} />
                        <a href={'/parties'}><span>Home</span></a>
                        <a href={'/parties'} style={path == "/parties" ? focus : null }><i className="far fa-handshake" style={path == "/parties" ? focusColor : null}/><span style={path == "/parties" ? focusColor : null}>Parties</span></a>
                        <a href={'/candidates'} style={path == "/candidates" ? focus : null }><i className="fas fa-users" style={path == "/candidates" ? focusColor : null}/><span style={path == "/candidates" ? focusColor : null}>Candidates</span></a>
                        <a href={'/result'} style={path == "/result" ? focus : null }><i className="fas fa-box-open" style={path == "/result" ? focusColor : null}/><span style={path == "/result" ? focusColor : null}>Results</span></a>
                        <a href={'/sign-out'} style={path == "/sign-out" ? focus : null }><i className="fas fa-sign-out-alt" style={path == "/sign-out" ? focusColor : null}/><span style={path == "/sign-out" ? focusColor : null}>Sign out</span></a>
                    </div>

                    <div className="nav">
                        <span className="openbutton" style={style3} onClick={this.openNav} ><i className="fas fa-align-justify" /></span>
                        <a className="entry-nav-logo-link" href={'/'}><img className="entry-nav-logo" src={logo} /></a>
                        <ul id="username" />

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default EntryNavBar;
