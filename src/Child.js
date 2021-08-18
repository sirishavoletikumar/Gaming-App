import React from "react";

class Child extends React.Component {
  render() {
    console.log("rendering child");
    return (
      <>
        <h1 onClick={() => this.props.handleButton()}>
          My id is {this.props.id}
        </h1>
      </>
    );
  }
}
export default Child;
