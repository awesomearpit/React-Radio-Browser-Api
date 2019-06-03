import React, { Component } from "react";
import AppTitle from "../Components/AppTitle";
import Homepage from "./Homepage";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.title = "Radio Browser List";
  }

  render() {
    return (
      <div>
        <AppTitle title={this.title} />
        <Homepage />
      </div>
    );
  }
}
