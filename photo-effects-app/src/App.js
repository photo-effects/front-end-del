import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    testData: []
  }

  componentDidMount() {
    axios.get("https://photo-effect-backend.herokuapp.com/api/users")
    .then(res => this.setState({testData: res.data}))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1>Photo Effects</h1>
        {this.state.testData.map(data => {
          return (
            <>
              <div>{data.id}</div>
              <div>{data.username}</div>
              <div>{data.password}</div>
            </>
          )
        })}
      </div>
    );
  }
}

export default App;
