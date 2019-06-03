import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../../../store';
import AdminNavBar from '../../reuseable component/admin-navbar.component';
import swal from 'sweetalert';
import { deleteParty } from '../../../actions/deleteAction';
import '../../../styles/addParties-style.css';
import '../../../styles/admin-modal.style.css';


export class DeleteParty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partyname: '',
    };
    this.onChange = this.onChange.bind(this);
  }


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  deletePartyHandler = async (e) => {
    e.preventDefault();

    const partyId = this.props.match.params.id;

    await this.props.deleteParty(partyId);
    swal({
      icon: 'success',
      title: `Party deleted successfully`,
    });
    // window.location = '/all-parties';
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
                  ARE YOU SURE YOU SURE?
                        </h1>
              </div>

              <form className="entry-form">
                <footer className="entry-footer">
                  <input className="entry-button" type="submit" name="btn_signin" value="Yes" onClick={this.deletePartyHandler} />
                  <br />
                  <br />
                  <input className="entry-button" type="submit" name="btn_signin" value="Cancel" href={'/add-parties'} />
                </footer>
              </form>
            </section>
          </main>
        </React.Fragment>
      </Provider>
    );
  }
}

DeleteParty.propTypes = {
  deleteParty: PropTypes.func.isRequired,
}

const mapStateToProps = (state, posts) => ({
  party: state.get.items.data,
  error: posts.error,
});

export default connect(mapStateToProps, { deleteParty })(DeleteParty);
