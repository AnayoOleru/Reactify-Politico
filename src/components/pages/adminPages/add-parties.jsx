import React, { Component } from 'react';
import { Link } from 'react-router';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CreateOffice } from '../../../actions/postActions';
import store from '../../../store';
import validatePartySubmission  from '../../../validation/addParty-validation';
import '../../../styles/addParties-style.css';


class AddParty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      headquarters: '',
      logo: '',
      isNameError: false,
      isHeadquaterError: false,
      isLogoError: false,
      loading: false,
    };
    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }
  // componentDidMount() {

  // }

  // componentWillReceiveProps() {
    
  // }
  
  // in here before the component loads
  // show spinner

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const userInput = this.state;
    const result = validatePartySubmission(userInput);
    if(!result) {
      // eslint-disable-next-line no-console
      console.log('Inputs must be valid before submission');
    }
    // clear the state
    this.setState({
        name: '',
        headquarters: '',
        logo: '',
        isNameError: false,
        isHeadquaterError: false,
        isLogoError: false,
        loading: false,
    });

      const data = {
      name: userInput.name,
      headquarters: userInput.headquarters,
      logo: userInput.logo
      };
       
      // console.log(data, 'data');

    //  call action 
     this.props.CreateOffice(data);  
  }

  render() {
      const style1 = {
        width: '80px',
        paddingLeft: '30px',
      };
      const style2 = {
        paddingLeft: '30px', 
        color: '#ffffff',
        fontSize: '20px',
      };
      const style3 = {
        fontSize:'30px',
        cursor:'pointer',
        height: '30px',
      };
      const style4 = {
        backgroundColor:'#ffffff',
      };
      const style5 = {
        fontSize: '30px'
      };

      this.openNav = () => {
        document.getElementById('mySidenav').style.width = '250px';
      };
      this.closeNav = () => {
        document.getElementById('mySidenav').style.width = '0';
      };

      this.openLog = () => {
        openModal.style.display = 'block';
        editBtn.disabled = true;
        deleteBtn.disabled = true;
      }
      
      this.closeLog = () => {
        openModal.style.display = 'none';
        editBtn.disabled = false;
        deleteBtn.disabled = false;
      }
      
      // delete party
      // deleteBtn.addEventListener("click", openDelete)
      this.openDelete = () => {
        deleteParty.style.display = 'block';
        addbtn.disabled = true;
        editBtn.disabled = true;
      }
      
      this.closeDelete = () => {
        deleteParty.style.display = 'none';
        addbtn.disabled = false;
        editBtn.disabled = false;
      }

    const {
      name,
      headquarters,
      logo,
      isNameError,
      isHeadquaterError,
    } = this.state;

    return (
      <Provider store={store}>
        <React.Fragment>       
            <div id="mySidenav" className="sidenav">
                <a href="#" className="closebtn" onClick={this.closeNav}><i className="fa fa-chevron-circle-right"></i></a>
                <img style={style1} src="../images/userimg.png" />
                <h1 style={style2} id="nameside"> </h1>
                <a href={'/'}><span>Home</span></a>
                <a className="active" href={'/add-party'}><i className="far fa-handshake"></i><span>Parties</span></a>
                <a href={'/add-office'}><i className="fas fa-building"></i><span>Office</span></a>
                <a href={'/register-user'}><i className="fas fa-user-plus"></i><span>Register</span></a>
                <a href="#"><i className="fas fa-sign-out-alt"></i><span>Sign out</span></a>
            </div>
            <div className="nav">
            <span style={style3} className="openbutton" onClick={this.openNav}><i className="fas fa-align-justify"></i></span>

                    <ul id="username"> 
                        
                    </ul>
            </div> 

       


            <main style={style4}>
                <section className="section-cards">
                    <div className="text-cards">
                        <h1 className="heading-primary">
                            Parties
                        </h1>
                    </div>
                    <div className="row" id="partyResult">
                            
                        <div className="col-1-of-3">                 
                            <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture--3">&nbsp;</div>
                                    <div className="card__details">
                                        <ul>
                                            <li style={style5}>ACCORD</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-3">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                                <p className="card__price-only">Headquater Address</p>
                                                <p className="card__price-only">23 Abuja Road</p>
                                
                                        </div>
                                        <a href="#" className="btn" id="edit">Edit</a>
                                        <a href="#" className="btn" id="delete">Delete</a>                                                                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        
                </section>
        
            </main>


            <div className="modal" id="openmodal">
                        <form className="partylog" id="addParty">
                                <h1>Add Party</h1>
                                <input type="text" placeholder="party name" id="name" required />
                                <input type="text" placeholder="HQ address" id="hqaddress" />
                            <input type="text" id="logoURL" placeholder="logoUrl" required />
                            <br />
                            <div id="result"></div>
                            <input type="submit" value="cancel" onClick={this.closeLog} />
                            <input type="submit" />
                        </form>
                    </div>

 
                    <div className="modal1" id="openparty">
                                <form>
                                        <h1>Edit Party</h1>
                                        <input type="text" placeholder="party name" id="editvalue" />
                                    <br />
                                    <div id="result">error&success</div>
                                    <br />
                                         <input type="submit" value="cancel" onClick={this.closeEdit} />
                                         <input type="submit" onClick={this.editSubmit} />
                                </form>
                            </div>
                            <div className="modal2" id="deleteparty">
                                                <h1>This party will be deleted</h1>
                                                <div id="delResult">Error&success</div>
                                            <button onClick={this.closeDelete}>Cancel</button>
                                            <button onClick={this.deleteGo}>Go on</button>
                                            
                                    </div>

        <button className="add" id="addbtn" onClick={this.openLog}>+</button>
             {/* render components here, pass onsubmit, onchange, name, and value{pass the state} to the inputs */}
        </React.Fragment>
        </Provider>
    );
  }
}

// AddParty.propTypes = {
//   CreateParty:  PropTypes.func.isRequired
// } 

export default AddParty;
