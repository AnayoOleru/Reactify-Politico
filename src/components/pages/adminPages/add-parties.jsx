import React, { Component } from 'react';
import { Link } from 'react-router';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import swal from '@sweetalert/with-react';
import { getAllParties, } from '../../../actions/getActions';
import uploadToCloudnary from '../../../../Utils/uploadToCloudinary';
import { CreateParty } from '../../../actions/postActions';
import { deleteAParty } from '../../../actions/deleteAction.js';
import store from '../../../store';
import AdminNavBar from '../../reuseable component/admin-navbar.component';
import validatePartySubmission from '../../../validation/addParty-validation';
import '../../../styles/addParties-style.css';
import '../../../styles/admin-modal.style.css';


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
  componentDidMount() {
    const { getAllParties } = this.props;
    getAllParties();
  }

  // in here before the component loads
  // show spinner

  onChange(e) {
    e.preventDefault();
    console.log(e.target.name);
    // this.setState({ [e.target.name]: e.target.value });
    this.setState({ [e.target.name]: 'fefefere', headquarters: 'hhhhhh' });
    console.log(this.state);
  }

  // this saves data to cloudinary
  saveToCloudinary = async e => {
    const form = new FormData();
    const imageData = e.target.files[0];
    console.log(imageData);
    // const validFormat = validateImage(imageData);
    // if (validFormat.valid) {
    //   toast.info(validFormat.message, {
    //     type: toast.TYPE.INFO,
    //     closeButton: false,
    //     position: toast.POSITION.TOP_CENTER,
    //   });
    form.append('file', imageData);
    const res = await uploadToCloudnary(form);
    console.log('URL>>>>', res);
    this.setState({ logo: res.url });
    console.log(this.state);

  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const userInput = this.state;
    // const result = validatePartySubmission(userInput);
    // if (!result) {
    //   return swal({
    //     icon: 'warning',
    //     title: 'Inputs Must be Valid Before Submission',
    //   });
    // }
    // clear the state
    this.setState({
      name: 'ddefeff',
      headquarters: 'fefefefef',
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
    this.props.CreateParty(data);
    swal(`You have successfully added....`);
  }

  render() {

    this.modal = () => {
      swal(
        <div>
          <h2 className="party-add-party">Add Political Party</h2>
          <input placeholder="Party name" className="entry-input" type="text" name="name" value={this.state.name} onChange={(e) => {
            e.preventDefault();
            console.log(e.target.name);
            // this.setState({ [e.target.name]: e.target.value });
            this.setState({ [e.target.name]: e.target.value, });
            console.log(this.state);
          }}
            required />
          <br />
          <br />
          <input placeholder="Party HQ Address" className="entry-input" type="text" name="headquarters" value={this.state.headquarters} onChange={this.onChange}
            required />
          <br />
          <br />
          <p>Upload Party Image</p>
          <input className="entry-input-file" type="file" name="name" onChange={this.saveToCloudinary}
            accept=".png, .jpg, .jpeg"
            required />
          <br />
          <p className="party-error-message">ERROR</p>
          <br />
          <input className="entry-input-btn" type="submit" name="name" value="Add" onClick={this.handleSubmit}
            required />
        </div>
      );
    };

    this.editModal = () => {
      swal(
        <div>
          <h2 className="party-add-party">Edit Political Party name</h2>
          <input placeholder="Party name" className="entry-input" type="text" name="name" onChange={this.onChange}
            required />
          <br />
          <p className="party-error-message">ERROR</p>
          <br />
          <input className="entry-input-btn" type="submit" name="name" value="Edit"
            required />
        </div>
        // display if admin successfully delete the party
      )
    };

    this.deleteModal = (Id) => {
      swal(
        <div>
          <h2 className="party-add-party">Delete Political Party</h2>
          <h2 className="party-add-party-delete">Are you sure you want to delete this party?</h2>
          <br />
          <br />
          <input className="entry-input-btn" type="submit" name="name" value="Yes" onClick={this.deleteParty(Id)} />
          <br />
          <br />
          <input className="entry-input-btn" type="submit" name="name" value="Cancel"
            required />
        </div>
      )
    };

    this.deleteParty = (partyId) => {
      // //  const { deleteAParty } = this.props;
      //  this.props.get && this.props.get.map(party => (
      //    console.log(party.id)
      //   // deleteAParty(party.id)
      //  ));
      console.log(partyId);

    }
    const getParties = this.props.get && this.props.get.map(party => (
      <div className="row" id="partyResult" key={party.id}>

        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3"><img src={party.logourl} /></div>
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
                <a href="#" className="btn" id="edit" onClick={this.editModal}>Edit</a>
                <a href="#" className="btn" id="delete" onClick={this.deleteModal}>Delete</a>
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
      fontSize: '30px',
      cursor: 'pointer',
      height: '30px',
    };
    const style4 = {
      backgroundColor: '#ffffff',
    };
    const style5 = {
      fontSize: '30px'
    };

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
                {/* <input placeholder="Party name" className="entry-input" type="text" name="name" value={this.state.name} onChange={(e) => {
                  e.preventDefault();
                  console.log(e.target.name);
                  // this.setState({ [e.target.name]: e.target.value });
                  this.setState({ [e.target.name]: e.target.value, });
                  console.log(this.state);
                }} */}
                  required />
              </div>
              {getParties}
            </section>
            <button onClick={this.modal} className="add" >+</button>
          </main>
        </React.Fragment>
      </Provider>
    );
  }
}

AddParty.propTypes = {
  getAllParties: PropTypes.func.isRequired,
  CreateParty: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  posts: state.payload,
  get: state.get.items.data,
});

export default connect(mapStateToProps, { getAllParties, CreateParty })(AddParty);
