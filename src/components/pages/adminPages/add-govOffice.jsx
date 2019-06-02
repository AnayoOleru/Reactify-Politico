import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { CreateOffice } from '../../../actions/postActions';
import store from '../../../store';
import AdminNavBar from '../../reuseable component/admin-navbar.component';
import '../../../styles/addParties-style.css';
import '../../../styles/admin-modal.style.css';


class AddOffice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      officename: '',
      isTypeError: false,
      isNameError: false,
      loading: false,
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    if (!token || decoded.isAdmin === false) {
      window.location = '/';
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  AddNewOffice = async (e) => {
    e.preventDefault();

    const adminInput = this.state;
    const data = {
      type: adminInput.officetype,
      name: adminInput.officename,
    };
    this.props.CreateOffice(data);
  }

  render() {

    const style4 = {
      backgroundColor: '#ffffff',
    };

    const {
      officetype,
      officename,
      isTypeError,
      isNameError,
      loading,
    } = this.state;

    return (
      <Provider store={store}>
        <React.Fragment>
          <AdminNavBar />
          <main style={style4}>
            <section className="section-cards">
              <div className="text-cards">
                <h1 className="heading-primary">
                  Add Office
                        </h1>
              </div>

              <form className="entry-form" onSubmit={this.AddNewOffice}>
                <main className="entry-main">
                  <div className="entry-group">
                    <input className="entry-input" type="text" name="officetype" onChange={this.onChange}
                      value={officetype} required />
                    <label className="entry-label">Office Type </label>
                    <div className="entry-bar" />
                  </div>
                  <div className="entry-group">
                    <input className="entry-input" type="text" name="officename" onChange={this.onChange}
                      value={officename} required />
                    <label className="entry-label">Office name </label>
                    <div className="entry-bar"></div>
                  </div>
                </main>
                <footer className="entry-footer">
                  <input className="entry-button" type="submit" name="btn_signin" value="Add Office" />
                </footer>
              </form>
            </section>
          </main>
        </React.Fragment>
      </Provider>
    );
  }
}

AddOffice.propTypes = {
  CreateOffice: PropTypes.func.isRequired,
}

const mapStateToProps = (state, posts) => ({
  newOffice: state.get.items.data,
  error: posts.error,
});

export default connect(mapStateToProps, { CreateOffice })(AddOffice);
