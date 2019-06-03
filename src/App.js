import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "../src/Containers/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="" component={Main} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
