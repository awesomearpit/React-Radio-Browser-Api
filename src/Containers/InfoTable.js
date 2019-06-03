import React, { Component } from "react";
import InfoTableHead from "../Components/InfoTableHead";
import InfoTableBody from "../Components/InfoTableBody";
import { URL } from "../Utils/config";

export default class InfoTable extends Component {
  constructor(props) {
    super(props);
    this.limit = 500;
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(URL + `?limit=${this.limit}`)
      .then(response => response.json())
      .then(data => {
        console.log("data", data);
        this.setState({
          data: data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const keys = [
      "Id",
      "Name",
      "Codec",
      "Country",
      "Last check Time",
      "Votes",
      "Url"
    ];
    return (
      <table className="table table-hover">
        <InfoTableHead headElements={keys} />
        <InfoTableBody userData={this.state.data} />
      </table>
    );
  }
}
