import React from 'react';
import Body from './Body';
import Title from './Title';
import Text from './Text';

class Card extends React.Component {
  static Body = Body;

  static Title = Title;

  static Text = Text;

  render() {
    const { children } = this.props;
    return <div className="card">{children}</div>;
  }
}

export default Card;
