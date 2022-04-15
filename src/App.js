import React from "react";
import HelloWorld from "./HelloWorld";

class App extends React.Component {
  constructor(props) {
    super(props);
    // console.log("App constructor called");
    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { counter } = this.state;

    this.setState({
      counter: counter + 1,
    });
  }

  componentDidMount() {
    // console.log("App componentDidMount called ");
  }

  componentDidUpdate() {
    // console.log("App Update");
  }

  render() {
    // console.log("App render called");
    const { counter } = this.state;

    return (
      <>
        <h1>Counter is {counter}</h1>
         <button onClick={this.handleClick}>Click me</button>
        {
            counter === 5 ? <HelloWorld /> : null
        }
      </>
    );
  }
}

export default App;
