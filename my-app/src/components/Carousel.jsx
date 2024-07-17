import React from 'react';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  // Handler for Prev button
  handlePrev = () => {
    this.setState((prevState, props) => ({
      currentIndex:
        prevState.currentIndex === 0 ? props.images.length - 1 : prevState.currentIndex - 1
    }));
  };

  // Handler for Next button
  handleNext = () => {
    this.setState((prevState, props) => ({
      currentIndex:
        prevState.currentIndex === props.images.length - 1 ? 0 : prevState.currentIndex + 1
    }));
  };

  render() {
    const { images } = this.props;
    const { currentIndex } = this.state;

    return (
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Render images from array */}
          {images.map((image) => (
            <div
              key={image}
              className={classNames('carousel-item', { active: images[currentIndex] === image })}>
              <img alt={image} className="d-block w-100" src={image} />
            </div>
          ))}
        </div>
        {/* Controls */}
        <button
          className="carousel-control-prev"
          data-bs-target="#carousel"
          type="button"
          data-bs-slide="prev"
          onClick={this.handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          data-bs-target="#carousel"
          type="button"
          data-bs-slide="next"
          onClick={this.handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

export default Carousel;
