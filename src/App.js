import React, { Component } from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import Stats from "./components/Stats";
import Text from "./components/Text";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  state = {
    health: "Ok",
    items: {},
    room: "prologue"
  };
  render() {
    console.log(this.state);
    return (
      <div id="App">
        <Header />
        <Text status={this.state} changeRoom={this.changeRoom} />
        <Map />
        <Stats status={this.state} />
        <Footer />
      </div>
    );
  }
  changeRoom = e => {
    const newRoom = e.target.value;
    this.setState({ room: newRoom });
  };
}

export default App;
