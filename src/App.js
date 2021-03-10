import React, { Component } from "react";
import Head from "./head";
import Mounting from "./Mounting";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Updating from "./Updating";
import Unmounting from "./Unmounting";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Head />
          <Switch>
            <Route path="/" component={Mounting} exact></Route>
            <Route path="/updating" component={Updating}></Route>
            <Route path="/unmounting" component={Unmounting}></Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
