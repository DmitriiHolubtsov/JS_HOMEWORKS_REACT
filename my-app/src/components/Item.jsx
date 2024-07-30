import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({ task, onRemove }) => (
  <div className="item">
    <div className="row">
      <div className="col-auto">
        <button type="button" className="btn btn-primary btn-sm" onClick={onRemove}>
          Remove
        </button>
      </div>
      <div className="col">{task}</div>
    </div>
    <hr />
  </div>
);

Item.propTypes = {
  task: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default Item;
