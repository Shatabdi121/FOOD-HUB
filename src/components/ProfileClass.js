import React from "react";

class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state={
            userInfo:{
              name: "Invalid name",
              location: "Select",
            },
          };
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            console.log("NAMASTE REACT OP ");
          }, 1000);
        console.log("componentDidMount");
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.count !== prevState.count) {
            //
          }
        console.log("componentDidUpdate");
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render(){
        return(
            <div>
            <h1>Profile class component</h1>
            <img src={this.state.userInfo.avatar_url} />
            <h2>Name : {this.state.userInfo.name}</h2>
            <h3>Location : {this.state.userInfo.location}</h3>
            </div>
        )
    }

}

export default Profile;