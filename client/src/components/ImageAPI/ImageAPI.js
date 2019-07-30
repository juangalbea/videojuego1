import React, { Component } from 'react';
import './ImageAPI.css';

class ImageAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      hits: []  
    };
  }

  componentDidMount() {
    fetch(`https://pixabay.com/api/?key=11997623-103c7c4f1fd04d1a3ab285b96&q=big+flowers+red&image_type=photo&&per_page=10      `)
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

  render() {
    const { error, isLoaded, hits } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {hits.map(item =>  (
            <li key={item.user}>
              {/* {item.user} {item.likes} */}
              <img src={item.previewURL} onClick={()=> this.props.findUrl(item.webformatURL)} ></img>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default ImageAPI;
//process.env.PIXABAY_SECRET_CODE

//${process.env.PIXABAY_SECRET_CODE}