import React, { Component } from "react";
import Post from "./components/Post";
import Sample from './components/Sample';

export default class App extends Component {
  getServerData = () => {
    fetch("http://localhost:5000/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res);
        console.log(typeof res);
        return res.json();
      })
      .then((res) => console.log(res));
  };
  render() {
    return (
      <div>
        {/* <button onClick={this.getServerData}>버튼</button> */}
        <Sample/>
        <Post/>
      </div>
    );
  }
}
