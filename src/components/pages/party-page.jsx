import React, { Component } from 'react';
import NavBar from '../reuseable component/auth-user-navbar.component.jsx';
import Card from '../reuseable component/footer-component.jsx';
import { connect } from 'react-redux';
import { getAllParties } from '../../actions/getActions';

class Parties extends Component {
    componentWillMount(){
        // eslint-disable-next-line react/prop-types
        this.props.getAllParties();
    }
  render() {
    //   here declare how you want the posts to be structured like
      // eslint-disable-next-line react/prop-types
      const postItems = this.props.posts.map(post => (
        //   for example
        <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        </div>
        
      ))
    return (
        <React.Fragment>
            <NavBar />
            <main>
        <section className="section-cards">
            <div className="text-cards">
                <h1 className="heading-primary">
                    Parties
                </h1>
{/* then render the items, for example */}
                <div>{postItems}</div>

                <div className="col-1-of-3">
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className="card__picture card__picture--1" id="partyImage">&nbsp;</div>
                        <div className="card__details">
                            <ul>
                                <li id="partyName" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="row" id="partyResult" />

        </section>
    </main>
        </React.Fragment>
    );
  }
}
// get the new data in the state, or get data from redux
const mapStateToProps = state => ({
    posts: state.get.items
});

export default connect(mapStateToProps, getAllParties)(Parties);
