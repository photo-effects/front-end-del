import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    testData: []
  }

  componentDidMount() {
    // axios.get("https://swapi.co/api/people")
    axios.get("")
    .then(res => this.setState({testData: res.data.results}))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1>Photo Effects</h1>
        {this.state.testData.map(data => {
          return <div>{data.name}</div>
        })}
      </div>
    );
  }
    
}

export default App;
