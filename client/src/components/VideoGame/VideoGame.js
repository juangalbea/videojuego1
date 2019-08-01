import React, { Component } from "react";

export default class VideoGame extends Component {
  constructor(props) {
    super(props);
  }
componentDidMount(){
  const script = document.createElement("script");
  script.src="../videoGameProject/js/game.js"
  script.src="../videoGameProject/js/gamepadtest.js"
  script.src="../videoGameProject/js/index.js"


  document.body.appendChild(script)

}


  render() {
    return (
      <React.Fragment>
        <canvas id="canvas" width="1200" height="700" />
      </React.Fragment>
    );
  }
}
