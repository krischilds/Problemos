import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  render() {
    return <div>Home</div>;
  }
}
