import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default location",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ronitsingh2001");
    const jsonData = await data.json();
    this.setState({
      userInfo: jsonData,
    });
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @ronit2112</h4>
      </div>
    );
  }
}

export default UserClass;
