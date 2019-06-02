import React from 'react';
import { RingLoader } from 'react-spinners';

class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className="sweet-loading">
        <h1
          color={'#123abc'}
          loading={this.state.loading}
        >Loading...</h1>
      </div>
    );
  }
}
export default AwesomeComponent;
