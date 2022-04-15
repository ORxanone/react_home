import React from "react";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    console.log("HelloWorld constructor called");
  }

  componentDidMount() {
    console.log("HelloWorld componentDidMount called ");
    setInterval(() => {
      console.log("HelloWorld is working");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("HelloWorld Update");
  }

  componentWillUnmount() {
    console.log("HelloWorld componentWillUnMount called");
  }

  render() 
  
  {
    console.log("HelloWorld render called");

    return <h1>Yeah! Cunter is 5! :D</h1>;
  }
}

export default HelloWorld;
