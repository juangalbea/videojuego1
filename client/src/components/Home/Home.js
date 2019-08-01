import React, { Component } from 'react'
import Elements from '../../Services/Elements'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allGames: null
    }
    this.service = new Elements()
  }

  getGames() {
    this.service.getgame()
    .then(res => {
      console.log(res)
      this.setState({
        ...this.state,
        allGames: res
      })
    }) 
  }

  componentDidMount() {
    this.getGames()
  } 
  render() {
    console.log(this.state.allGames)
    return (
        <Carousel>

{
(this.state.allGames)
?
<React.Fragment>
{this.state.allGames.map((game, i) => {
 return  (<div>
  <img src={game.imageID} />
  <p className="legend">{game.name}</p>
</div>)
})}
</React.Fragment>
: <h3>Loading...</h3>
}

                {/* <div>
                    <img src="https://pixabay.com/get/55e6d5424b5ba814f6da8c7dda79367f1c36d9e351526c4870297fd19e4dc25db8_1280.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://pixabay.com/get/55e1d0454e56ac14f6da8c7dda79367f1c36d9e351526c4870297fd19e4dc25db8_1280.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://pixabay.com/get/53e3d3404d54b108f5d08460962936771c38d8e7504c704c732b7dd49249c45a_1280.jpg" />
                    <p className="legend">Legend 3</p>
                </div> */}
            </Carousel>
    )
  }
}


// ReactDOM.render(<Home />, document.querySelector('.demo-carousel'));
 
// Don't forget to include the css in your page
 
// Using webpack
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
 
// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
 