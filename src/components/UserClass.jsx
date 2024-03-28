import React from "react";
import User from "./User";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(`${this.props.id}C`)
    this.state = {
        count: 0,
    };
}

componentDidMount(){
    console.log(`${this.props.id}CD`)
  }

render() {
      console.log(`${this.props.id}R`)
    return (
      <div className="user-card">
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => {
            this.setState({
                count: this.state.count + 1
            })
        }}>Increment</button>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Delhi</h3>
        <h4>Contact: @ronit2112</h4>
        <User id={`${this.props.id}X`} name={"Name001"} />
        <User id={`${this.props.id}Y`} name={"Name002"} />
      </div>
    );
  }
}

export default UserClass;
