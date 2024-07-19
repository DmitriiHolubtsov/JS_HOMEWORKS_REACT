function Header({ toggle, children }) {
  return (
    <div className="modal-header">
      <div className="modal-title">{children}</div>
      <button type="button" className="btn-close" aria-label="Close" onClick={toggle} />
    </div>
  );
}

export default Header;
