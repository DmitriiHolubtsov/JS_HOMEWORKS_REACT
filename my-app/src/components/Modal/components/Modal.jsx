import React from 'react';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';
import './Modal.css';

class Modal extends React.Component {
  render() {
    const { isOpen, children } = this.props;

    return (
      <div
        className={`modal ${isOpen ? 'fade show' : ''}`}
        style={{ display: isOpen ? 'block' : 'none' }}
        role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">{children}</div>
        </div>
      </div>
    );
  }
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
