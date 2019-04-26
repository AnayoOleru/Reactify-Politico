import React, { Component } from 'react';
import NavBar from '../reuseable component/auth-user-navbar.component.jsx';
import Card from '../reuseable component/footer-component.jsx';
import { connect } from 'react-redux';
import fetchParties from '../../actions/getActions';

class Parties extends Component {
    componentWillMount(){
        this.props.fetchParties();
    }
  render() {
    //   here declare how you want the posts to be structured like
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

const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, fetchParties)(Posts);
