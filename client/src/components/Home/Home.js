import React, { Component } from 'react'
import Elements from '../../Services/Elements'
import ReactDOM from 'react-dom';
import './Home.css';

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
 <div className="gameList">

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

</div>
    )
  }
}


// ReactDOM.render(<Home />, document.querySelector('.demo-carousel'));
 
// Don't forget to include the css in your page
 
// Using webpack
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
 
// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
 