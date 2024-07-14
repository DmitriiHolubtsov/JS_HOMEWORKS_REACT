import React from 'react';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';

class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBtn: null
    };
  }

  handleBtnClick = (btn) => {
    this.setState({ activeBtn: btn });
  };

  render() {
    const { activeBtn } = this.state;

    return (
      <div className="btn-group" role="group">
        <button
          type="button"
          className={classNames('btn btn-secondary left', { active: activeBtn === 'left' })}
          onClick={() => this.handleBtnClick('left')}>
          Left
        </button>
        <button
          type="button"
          className={classNames('btn btn-secondary right', { active: activeBtn === 'right' })}
          onClick={() => this.handleBtnClick('right')}>
          Right
        </button>
      </div>
    );
  }
}

export default BtnGroup;
