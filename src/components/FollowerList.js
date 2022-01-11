import React from "react";
import axios from "axios";

class FollowerList extends React.Component{
    state = {
        followersInfo: [],
        followers: [],
        liveFollowers: []
    }

    componentDidMount(){
        axios.get(`https://api.github.com/users/Tuan147/followers`)
            .then(res => {
                this.setState({
                    ...this.state,
                    followersInfo: res.data,
                    liveFollowers: res.data
                });
            })
            .catch(err => {
                console.error(err)
            })
    }

    handleSubmit = e => {
        e.preventDefault();
        axios.get(`https://api.github.com/users/Tuan147/${this.state.followers}`)
            .then(res => {
                this.setState({
                    ...this.state,
                    followersInfo: res.data,
                    liveFollowers: res.data
                })
            })
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            followers: e.target.value,
            liveFollowers: this.state.followersInfo.filter(shadow => {
                return shadow.LF.includes(e.target.value)
            })
        })
    }

    render () {
        return (<div>
            <h3>Followers: </h3>
            <form>
                <input value={this.state.followers} handleChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Followers List</button>
            </form>
        </div>)
    }

}



export default FollowerList;