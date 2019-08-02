import React, { Component } from "react";
import "./ImageAPI.css";
import "bulma/css/bulma.css";

class ImageAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      hits: [],
      imageURL: "",
      isActive: true
    };
  }

  handleChangeImageURL = e => {
    this.setState({
      ...this.state,
      imageURL: e.target.value
    });
  };

  updateImages(e) {
    e.preventDefault();
    fetch(
      `https://pixabay.com/api/?key=11997623-103c7c4f1fd04d1a3ab285b96&q=${
        this.state.imageURL
      }&image_type=photo&&per_page=200`
    )
      .then(res => res.json())
      .then(result => {
        this.setState({
          ...this.state,
          isLoaded: true,
          hits: result.hits
        });
        //   this.setState({
        //     isLoaded: true,
        //     hits: result.hits
        //   });
        // })
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error
        });
      });
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
  }

  componentDidMount() {
    fetch(
      `https://pixabay.com/api/?key=11997623-103c7c4f1fd04d1a3ab285b96&q=${
        this.state.imageURL
      }&image_type=photo&&per_page=200`
    )
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          hits: result.hits
        });
      })
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      .catch(error => {
        this.setState({
          isLoaded: true,
          error
        });
      });
  }

  handleModal = e => {
    e.preventDefault()
    console.log("hola")
    this.setState({
      ...this.state,
      isActive: false
    })
  };

  handleModalBack = e => {
    e.preventDefault()
    console.log("holas")
    this.setState({
      ...this.state,
      isActive: true
    })
  };
  

  render() {
    console.log(this.state.imageURL);
    const { error, isLoaded, hits } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <button className="button" onClick={this.handleModal}>open gallery</button>
         {this.state.isActive?<div className="modal">
            <div className="modal-background" />
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">Search image</p>
                <button className="delete" onClick={this.handleModalBack} aria-label="close" />
              </header>
              <section className="modal-card-body">
                <input
                  type="text"
                  placeholder="imageurl"
                  onChange={this.handleChangeImageURL}
                  name="imageURL"
                  value={this.state.imageURL}
                />
                <button onClick={e => this.updateImages(e)}>Search</button>
                <ul>
                  {hits.map((item, i) => (
                    <li key={i}>
                      {/* {item.user} {item.likes} */}
                      <img
                        src={item.webformatURL}
                        onClick={() => this.props.findUrl(item.largeImageURL)}
                      />
                    </li>
                  ))}
                </ul>
              </section>
              <footer className="modal-card-foot">
                <button className="button" onClick={this.handleModalBack}>Close</button>
              </footer>
            </div>
          </div>:<div className="modal is-active"><div className="modal-background" />
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">Search image</p>
                <button className="delete"  onClick={this.handleModalBack} aria-label="close" />
              </header>
              <section className="modal-card-body">
                <input
                  type="text"
                  placeholder="imageurl"
                  onChange={this.handleChangeImageURL}
                  name="imageURL"
                  value={this.state.imageURL}
                />
                <button onClick={e => this.updateImages(e)}>Search</button>
                <ul>
                  {hits.map((item, i) => (
                    <li key={i}>
                      {/* {item.user} {item.likes} */}
                      <img
                        src={item.webformatURL}
                        onClick={() => this.props.findUrl(item.largeImageURL)}
                      />
                    </li>
                  ))}
                </ul>
              </section>
              <footer className="modal-card-foot">
                <button className="button" onClick={this.handleModalBack}>Close</button>
              </footer>
            </div>
          </div>}
        </div>
      );
    }
  }
}

export default ImageAPI;
//process.env.PIXABAY_SECRET_CODE

//${process.env.PIXABAY_SECRET_CODE}
