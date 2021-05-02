import React from "react";
import ReactDOM from "react-dom";
import Intro from "./display/Intro";
import MainDisplay from "./display/MainDisplay";
import Heading from "./display/Heading";

class App extends React.Component {
  state = { display: null };
  componentDidMount() {
    setInterval(() => {
      this.setState({ display: 1 });
    }, 3000);
  }
  render() {
    if (this.state.display == 1)
      return (
        <body>
          <Heading />
          <MainDisplay />
        </body>
      );
    return <Intro />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
