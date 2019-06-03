import React from "react";
import InfoTable from "./InfoTable";

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <InfoTable />
      </div>
    );
  }
}
