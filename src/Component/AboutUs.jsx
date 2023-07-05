import UserClass from "./UserClass";
import React from "react";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent DidMount");
  }
  render() {
    console.log("parent render");

    return (
      <>
        <h1>Hello I am About page</h1>;
        <UserClass name={"First"} />
        <UserClass name={"Second"} />
      </>
    );
  }
}

export default AboutUs;
