import React, { Component } from "react";
import pic from "../pic.jpg";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { go: 0, toggel: false };
  }

  show = () => {
    this.setState({
      toggel: !this.state.toggel,
      go: this.state.toggel ? this.start : null,
    });
  };

  start = () => {
    setInterval(() => {
      this.setState({ go: this.state.go + 1 });
    }, 1000);
  };

  render() {
    return (
      <div>
        <button onClick={this.show}>Click-me</button>
        {this.state.toggel ? (
          <div
            className="container"
            style={{
              background: "#BEDAF0",
              textAlign: "center",
              color: "#343748",
              fontFamily: "cursive",
            }}
          >
            <img src={pic} alt="this is a photoo" width={"400px"} />
            <h3>Name : Khary Ndoye Gueye</h3>
            <h3>Age : 22</h3>
            <h3>Profession : Web-Developer</h3>
            <h3>
              Bio : Lorem ipsum dolor sit amet. Ea explicabo enim sed culpa iste
              a assumenda sunt hic dolore facilis. Non aliquam accusamus est
              facilis pariatur est numquam quos. Quo aspernatur galisum id neque
              aspernatur quo nihil vero?
            </h3>
            {this.state.go === null ? this.start() : null}
            <h1>{this.state.go}</h1>
          </div>
        ) : null}
      </div>
    );
  }
}
