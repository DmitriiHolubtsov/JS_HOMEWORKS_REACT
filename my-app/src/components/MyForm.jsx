import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      address: '',
      city: '',
      country: '',
      acceptRules: false,
      submitted: false
    };
  }

  handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  handleBack = () => {
    this.setState({ submitted: false });
  };

  render() {
    const { submitted, email, password, address, city, country, acceptRules } = this.state;
    const formData = { email, password, address, city, country, acceptRules };

    const sortedEntries = Object.entries(formData).sort(([keyA], [keyB]) => keyA.localeCompare(keyB));
    return (
      <div>
        {!submitted ? (
          <form name="myForm" onSubmit={this.handleSubmit}>
            <div className="col-md-6 mb-3">
              <label htmlFor="email" className="col-form-label">
                Email
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={this.handleChange}
                  placeholder="Email"
                />
              </label>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="password" className="col-form-label">
                Password
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={this.handleChange}
                  placeholder="Password"
                />
              </label>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="address" className="col-form-label">
                Address
                <textarea
                  className="form-control"
                  name="address"
                  id="address"
                  value={address}
                  onChange={this.handleChange}
                  placeholder="1234 Main St"
                />
              </label>
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="city" className="col-form-label">
                City
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  id="city"
                  value={city}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="country" className="col-form-label">
                Country
                <select
                  id="country"
                  name="country"
                  className="form-control"
                  value={country}
                  onChange={this.handleChange}>
                  <option value="">Choose</option>
                  <option value="argentina">Argentina</option>
                  <option value="russia">Russia</option>
                  <option value="china">China</option>
                </select>
              </label>
            </div>
            <div className="col-md-6 mb-3">
              <div className="form-check">
                <label className="form-check-label" htmlFor="rules">
                  <input
                    id="rules"
                    type="checkbox"
                    name="acceptRules"
                    className="form-check-input"
                    checked={acceptRules}
                    onChange={this.handleChange}
                  />
                  Accept Rules
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
        ) : (
          <div>
            <button type="button" className="btn btn-primary" onClick={this.handleBack}>
              Back
            </button>
            <table className="table">
              <tbody>
                {sortedEntries.map(([key, value]) => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{typeof value === 'boolean' ? value.toString() : value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default MyForm;
