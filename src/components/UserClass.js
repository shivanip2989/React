import React, { Component } from "react";
import User from "./User";

class UserClass extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
        avatar_url: "dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shivanip2989");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  ComponentDidUpdate(prevProps, prevState) {}

  ComponentWillUnmount() {}

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
      </div>
    );
  }
}

export default UserClass;
