import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedInUser
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h2 className="font-bold">{loggedInUser}</h2>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is a About Page!</h2>
        <UserClass id={"P"} name={"First"} />
      </div>
    );
  }
}

export default About;
