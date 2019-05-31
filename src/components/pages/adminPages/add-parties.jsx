import React, { Component } from 'react';
import { Link } from 'react-router';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllParties, } from '../../../actions/getActions';
import uploadToCloudnary from '../../../../Utils/uploadToCloudinary';
import { CreateParty } from '../../../actions/postActions';
import { deleteAParty } from '../../../actions/deleteAction.js';
import store from '../../../store';
import AdminNavBar from '../../reuseable component/admin-navbar.component';
import swal from 'sweetalert';
import validatePartySubmission from '../../../validation/addParty-validation';
import '../../../styles/addParties-style.css';
import '../../../styles/admin-modal.style.css';


class AddParty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partyname: '',
      partyaddress: '',
      partyimage: '',
      loading: false,
    };
    this.onChange = this.onChange.bind(this);
  }
  // componentDidMount() {
  //   const { getAllParties } = this.props;
  //   getAllParties();
  // }
  // in here before the component loads
  // show spinner

 
  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
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
    this.setState({ partyimage: res.url });
    console.log(this.state, '.....state');

  };

  AddNewParty = async (e) => {
    e.preventDefault();

    const adminInput = this.state;
    console.log(adminInput.partyname);
    // clear the state

    const data = {
      name: adminInput.partyname,
      hqaddress: adminInput.partyaddress,
      logoUrl: adminInput.partyimage
    };

    console.log(data, 'data');
    this.props.CreateParty(data);
    swal({
      icon: 'success',
      title: `Party successfully created`,
    });
  }

  render() {
        <div>
          <h2 className="party-add-party">Delete Political Party</h2>
          <h2 className="party-add-party-delete">Are you sure you want to delete this party?</h2>
          <br />
          <br />
          <input className="entry-input-btn" type="submit" name="name" value="Yes" />
          <br />
          <br />
          <input className="entry-input-btn" type="submit" name="name" value="Cancel"
            required />
        </div>
    // };

    const style4 = {
      backgroundColor: '#ffffff',
    };

    const {
      partyname,
      partyaddress,
      partyimage,
    } = this.state;

    return (
      <Provider store={store}>
        <React.Fragment>
          <AdminNavBar />
          <main style={style4}>
            <section className="section-cards">
              <div className="text-cards">
                <h1 className="heading-primary">
                  Add Party
                        </h1>
              </div>

              <form className="entry-form" onSubmit={this.AddNewParty}>
   <main className="entry-main">
      <div className="entry-group">
         <input className="entry-input" type="text" name="partyname"  onChange={this.onChange}
            value={ partyname } required />
         <label className="entry-label">Party Name </label>
         <div className="entry-bar" />
      </div>
      <div className="entry-group">
         <input className="entry-input" type="text" name="partyaddress" onChange={this.onChange}
            value={partyaddress} required />
         <label className="entry-label">Party address </label>
         <div className="entry-bar"></div>
      </div>
      <div className="entry-group">
         <input className="entry-input" type="file" accept=".jpg, jpeg" name="partyimage" onChange={this.saveToCloudinary}
             required />
         <div className="entry-bar"></div>
      </div>
   </main>
   <footer className="entry-footer">
     <input className="entry-button" type="submit" name="btn_signin" value="Add Party" />
   </footer>
</form>
            </section>
          </main>
        </React.Fragment>
      </Provider>
    );
  }
}

AddParty.propTypes = {
  CreateParty: PropTypes.func.isRequired,
}

const mapStateToProps = (state, posts) => ({
  newParty: state.get.items.data,
  error: posts.error,
});

export default connect(mapStateToProps, { CreateParty })(AddParty);
