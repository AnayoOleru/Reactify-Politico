import React, { Component } from 'react';
import { Link } from 'react-router';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllParties } from '../../../actions/getActions';
import { CreateOffice } from '../../../actions/postActions';
import store from '../../../store';
import AdminNavBar from '../../reuseable component/admin-navbar.component';
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
  componentDidMount(){
    const { getAllParties } = this.props;
   getAllParties();
}
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
    const getParties = this.props.get && this.props.get.map(party => (
<div className="row" id="partyResult" key={party.id}>
                            
<div className="col-1-of-3">                 
    <div className="card">
        <div className="card__side card__side--front">
            <div className="card__picture card__picture--3">&nbsp;</div>
            <div className="card__details">
                <ul>
                    <li style={style5}>{party.name}</li>
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

    ));
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
          <AdminNavBar />
            <main style={style4}>
                <section className="section-cards">
                    <div className="text-cards">
                        <h1 className="heading-primary">
                            Parties
                        </h1>
                    </div>
                  {getParties}   
                </section>
        
            </main>

{/* modal */}
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

AddParty.propTypes = {
  getAllParties: PropTypes.func.isRequired,
} 

const mapStateToProps = state => ({
  posts: state.payload,
  get: state.get.items.data,
});

export default connect(mapStateToProps, { getAllParties })(AddParty);
