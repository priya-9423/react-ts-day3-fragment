import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      lName: "test",
      salary: 1000
    };
    var test1 = {
      name: "React",
      lName: "test",
      salary: 1000
    };
    var test2 = { ...test1, salary: 111 };
    console.log(test1);
    console.log(test2);

    var arr = ["test1", "2", "3"];
    var arr2 = [...arr, "4"];

    console.log(arr);
    console.log(arr2);

    var test3 = Object.assign({},test1, {salary:111});
    console.log(test3);

//object distructuring
    let {lName: t1, ...all} = test1;
    console.log(t1);
    console.log(all);
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <table />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
