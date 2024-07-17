import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // true by default
      isOpen: props.opened !== undefined ? props.opened : true
    };
  }

  // Click handler to show or hide
  handleToggle = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const { text } = this.props;
    const { isOpen } = this.state;
    // infoLine for fix an eslint spaces error
    const infoLine = 'Info';

    return (
      <div>
        <p>
          <a
            className="btn btn-primary"
            href="false"
            role="button"
            onClick={this.handleToggle}
            aria-expanded={isOpen}>
            {isOpen ? 'Hide' : 'Show'}
            {infoLine}
          </a>
        </p>
        <div className={`collapse ${isOpen ? 'show' : ''}`}>
          <div className="card card-body">{text}</div>
        </div>
      </div>
    );
  }
}

export default Collapse;
