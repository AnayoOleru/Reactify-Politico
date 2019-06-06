import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from '../../styles/images/pogo.png';
import userDefault from '../../styles/images/userimg.png';
import '../../styles/entryNav.style.css';
import '../../styles/userAdminNavbar.style.css';
import jwt_decode from 'jwt-decode';

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
        if (decoded.isAdmin === false) {
            window.location = '/sign-in';
        }
        this.setState({ decoded: decoded });
    }


    openNav() {
        document.getElementById('mySidenav').style.width = '250px';
        document.getElementById('mySidenav').style.height = '700px';
    }
    closeNav(){
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

        const { decoded } = this.state;
        const { focus, focusColor } = this.props;
        const path = this.props.props.location.pathname
        return (
            <React.Fragment>
                <div className="user-admin-container">
                    <nav className="entry-nav">
                        <a className="entry-nav-logo-link" href={'/add-party'}><img className="entry-nav-logo" src={logo} /></a>
                        <ul className="entry-nav-list-head">
                            <li className="entry-nav-list" style={ path == "/add-party" ? focus : null }><a style={path == "/add-party" ? focusColor : null} className="entry-nav-list-child" href={'/add-party'}>Home</a></li>
                            <li className="entry-nav-list active" style={ path == "/all-parties" ? focus : null } ><a style={path == "/all-parties" ? focusColor : null} className="entry-nav-list-child" href={'/all-parties'}>Parties</a></li>
                            <li className="entry-nav-list" style={ path == "/all-offices" ? focus : null } ><a style={path == "/all-offices" ? focusColor : null} className="entry-nav-list-child" href={'/all-offices'}>Office</a></li>
                            <li className="entry-nav-list" style={ path == "/register" ? focus : null } ><a style={path == "/register" ? focusColor : null}className="entry-nav-list-child" href={'/register'}>Register</a></li>
                            <li className="entry-nav-list" style={ path == "/sign-out" ? focus : null }><a style={path == "/sign-out" ? focusColor : null}className="entry-nav-list-child" href={'/sign-out'}>Sign-out</a></li>
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

                        <a href={'/add-party'} 
                        style={ path == "/add-party" ? focus : null } >
                            <i style={path == "/add-party" ? focusColor : null} className="fas fa-home" />
                            <span style={path == "/add-party" ? focusColor : null}>Home</span>
                            </a>

                        <a href={'/all-parties'} 
                        style={ path == "/all-parties" ? focus : null }>
                            <i style={path == "/all-parties" ? focusColor : null} className="far fa-handshake" />
                            <span style={path == "/all-parties" ? focusColor : null}>Parties</span>
                            </a>

                        <a href={'/all-offices'} style={ path == "/all-offices" ? focus : null }>
                            <i style={path == "/all-offices" ? focusColor : null} className="fas fa-landmark" />
                            <span style={path == "/all-offices" ? focusColor : null}>Office</span>
                            </a>

                        <a href={'/register'} style={ path == "/register" ? focus : null }><i style={path == "/register" ? focusColor : null} className="fas fa-user-tie" /><span style={path == "/register" ? focusColor : null}>Register</span></a>

                        <a href={'/sign-out'} style={ path == "/sign-out" ? focus : null }><i style={path == "/sign-out" ? focusColor : null} className="fas fa-sign-out-alt" /><span style={path == "/sign-out" ? focusColor : null}>Sign out</span></a>
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
