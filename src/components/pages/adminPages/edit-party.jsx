import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editParty } from '../../../actions/editAction';
import store from '../../../store';
import AdminNavBar from '../../reuseable component/admin-navbar.component';
import '../../../styles/addParties-style.css';
import '../../../styles/admin-modal.style.css';


class EditParty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partyname: '',
    };
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);

  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  EditOldParty = async (e) => {
    e.preventDefault();
    const partyId = this.props.match.params.id;
    const adminInput = this.state;

    const data = {
      name: adminInput.partyname,
    };
    this.props.editParty(data, partyId);
  }

  render() {

    const style4 = {
      backgroundColor: '#ffffff',
    };

    const {
      partyname,
    } = this.state;

    return (
      <Provider store={store}>
        <React.Fragment>
          <AdminNavBar />
          <main style={style4}>
            <section className="section-cards">
              <div className="text-cards">
                <h1 className="heading-primary">
                  Edit Party
                        </h1>
              </div>

              <form className="entry-form" onSubmit={this.EditOldParty}>
                <main className="entry-main">
                  <div className="entry-group">
                    <input className="entry-input" type="text" name="partyname" onChange={this.onChange}
                      value={partyname} required />
                    <label className="entry-label">Party Name </label>
                    <div className="entry-bar" />
                  </div>
                </main>
                <br />
                <footer className="entry-footer">
                  <input className="entry-button" type="submit" name="btn_signin" value="Edit Party Name" />
                  <br />
                  <br />
                </footer>
              </form>
            </section>
          </main>
        </React.Fragment>
      </Provider>
    );
  }
}

EditParty.propTypes = {
  CreateParty: PropTypes.func.isRequired,
}

const mapStateToProps = (state, posts) => ({
  newParty: state.get.items.data,
  error: posts.error,
});

export default connect(mapStateToProps, { editParty })(EditParty);
