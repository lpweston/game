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
    inventory: {},
    room: "escapePod",
    message: ""
  };
  render() {
    return (
      <div id="App">
        <Header />
        <Text {...this.state} changeStatus={this.changeStatus} />
        <Map />
        <Stats {...this.state} />
        <Footer />
      </div>
    );
  }
  changeStatus = ({ room, message, items }) => {
    if (items) this.inventorySorter(items);
    this.setState(prevState => {
      room = room || prevState.room;
      message = message || prevState.message;
      return { room, message };
    });
  };

  inventorySorter = items => {
    this.setState(prevState => {
      const { inventory } = prevState;
      for (const item in items) {
        if (inventory.hasOwnProperty(item)) {
          inventory[item] += items[item];
        } else {
          inventory[item] = items[item];
        }
      }
      return { inventory };
    });
  };
}

export default App;
