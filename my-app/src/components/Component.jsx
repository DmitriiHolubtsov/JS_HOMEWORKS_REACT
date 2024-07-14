import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Test extends React.Component {
  render() {
    const { header } = this.props;
    return <h1>{header}</h1>;
  }
}

export default Test;
