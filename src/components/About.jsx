import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("AC");
  }

  componentDidMount(){
    console.log('ACD')
  }

  render() {
    console.log("AR");

    return (
      <div>
        <h1>About</h1>
        <h2>This is a About Page!</h2>
        <UserClass id={'P'} name={"Krish Thakur (Class)"} />
        <UserClass id={'Q'} name={"Krish Thakur (Class)"} />
      </div>
    );
  }
}

export default About;
