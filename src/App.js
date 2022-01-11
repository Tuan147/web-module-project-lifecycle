import React from 'react';
import axios from 'axios';
import FollowerList from './components/FollowerList';
import User from './components/User'



class App extends React.Component {
  state = {
    user: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/Tuan147`)
      .then(res => {
        this.setState({
          ...this.state,
          user: res.data
        })
      })
      .catch(err => {
        console.error(err)
      })
  }


  render() {
    return(<div>
      <h1>GITHUB INFO</h1>
      <User />
      <FollowerList />
    </div>);
  }
}

export default App;
