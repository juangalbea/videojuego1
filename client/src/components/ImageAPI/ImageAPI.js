import React, { Component } from 'react';
import './ImageAPI.css';

class ImageAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      hits: [],
      imageURL: ""
    };
  }

handleChangeImageURL = (e) => {
    this.setState({
        ...this.state,
        imageURL: e.target.value
    })
}

updateImages(e) {
   if (e.key == 'Enter') {
    fetch(`https://pixabay.com/api/?key=11997623-103c7c4f1fd04d1a3ab285b96&q=${this.state.imageURL}&image_type=photo&&per_page=10      `)
      
      .then(res => res.json())
      .then(
        
        (result) => {
          
          this.setState({
            isLoaded: true,
            hits: []
          });
          this.setState({
            isLoaded: true,
            hits: result.hits
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
        
      )

      }
}

  componentDidMount() {
   fetch(`https://pixabay.com/api/?key=11997623-103c7c4f1fd04d1a3ab285b96&q=${this.state.imageURL}&image_type=photo&&per_page=10      `)
      
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            hits: result.hits
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {console.log(this.state.imageURL)
    const { error, isLoaded, hits } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
      
    } else {
      return (
        <div>
           <input type="text" placeholder="imageurl" onChange={this.handleChangeImageURL} onKeyDown={(e) => this.updateImages(e)} name="imageURL" value={this.state.imageURL}></input>
          <ul>
          {hits.map(item =>  (
            <li key={item.user}>
              {/* {item.user} {item.likes} */}
              <img src={item.previewURL} onClick={()=> this.props.findUrl(item.webformatURL)} ></img>
            </li>
          ))}
        </ul>
        </div>
      );
    }
  }
}

export default ImageAPI;
//process.env.PIXABAY_SECRET_CODE

//${process.env.PIXABAY_SECRET_CODE}