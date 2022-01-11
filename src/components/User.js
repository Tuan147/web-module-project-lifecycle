import React from "react";
import axios from 'axios';


class User extends React.Component {
    state = {
        user: []
    }

    componentDidMount(){
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

    render (){
        return (<div>
            <img  width={300} src={this.state.user.avatar_url} alt="user profile picture"/>
            <div>
                <p>Name: {this.state.user.name}</p>
                <p>Total Repos: {this.state.user.repos_url}</p>
                <p>Total Followers: {this.state.user.followers}</p>
            </div> 
            



        </div>)
    }
}

export default User;