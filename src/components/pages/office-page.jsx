import React, { Component } from 'react';
import NavBar from '../reuseable component/auth-user-navbar.component.jsx';
import Card from '../reuseable component/footer-component.jsx';
import { connect } from 'react-redux';
import { getAllOffice } from '../../actions/getActions';

class AllOffice extends Component {

    componentDidMount(){
        // eslint-disable-next-line react/prop-types
        this.props.getAllOffice();
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
      ));
      
    return (
        <React.Fragment>
{/* then render the items, for example */}
                <div>{postItems}</div>
        </React.Fragment>
    );
  }
}
// get the new data in the state, or get data from redux
const mapStateToProps = state => ({
    posts: state.get.items
});

export default connect(mapStateToProps, getAllOffice)(AllOffice);
