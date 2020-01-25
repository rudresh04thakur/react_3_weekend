import React, { Component } from 'react';
import './login.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as loginActions from "../../store/login/actions";
export default class login extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  // }
  render() {
    return <div className="component-login">
      <form className="form col-md-6 col-md-offset-3">
        <div className="form-group">
          <label for="email">Email</label>
          <input className="form-control" type="email"
            placeholder="Email" name="email"></input>
        </div>
        <div className="form-group">
          <label for="password">
            Password
              </label>
          <input className="form-control" type="password"
            placeholder="Password" name="password"></input>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">Login</button>
        </div>
      </form>
    </div>;
  }
}
// export default connect(
//     ({ login }) => ({ ...login }),
//     dispatch => bindActionCreators({ ...loginActions }, dispatch)
//   )( login );