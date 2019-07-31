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
      imageURL: ""
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
      }&image_type=photo&&per_page=20`
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
      }&image_type=photo&&per_page=20`
    )
      .then(res => res.json())
      .then(
        result => {
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
          {/* <div className="modal">
  <div className="modal-background"></div>
  <div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title">Modal title</p>
      <button className="delete" aria-label="close"></button>
    </header>
    <section className="modal-card-body">
   hola
    </section>
    <footer className="modal-card-foot">
      <button className="button is-success">Save changes</button>
      <button className="button">Cancel</button>
    </footer>
  </div>
</div> */}

          {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}

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
                  src={item.previewURL}
                  onClick={() => this.props.findUrl(item.webformatURL)}
                />
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
