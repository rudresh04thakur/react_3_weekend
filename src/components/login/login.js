import React, { Component } from 'react';
import './login.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as loginActions from "../../store/login/actions";
export default class login extends Component {
  initForm = {
    email: { value: 'gopal@gmail.com', error: '', valid: true },
    password: { value: '123', error: '', valid: true },
    isValid: true
  }
  constructor(props) {
    super(props);
    this.state = {
      formValue: this.initForm
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    for(var key in this.state.formValue){
      if(this.state.formValue[key]['value']==='' && typeof this.state.formValue[key] === 'object'){
        console.log(typeof this.state.formValue[key]," A")
        this.initForm[key]['error'] = "This is demo error ==> "+key
        this.initForm[key]['valid']= false;
        this.initForm['isValid'] = false;
      }else if(typeof this.state.formValue[key] === 'object'){
        console.log(typeof this.state.formValue[key]," B")
        this.initForm[key]['error'] = "";
        this.initForm[key]['valid']= true;
        this.initForm['isValid'] = true;
      }
    }
    this.setState({formValue:this.initForm})
    console.log("Form value === ", this.state.formValue)
  }
  changehandler = (event) => {
    this.initForm[event.target.name]['value'] = event.target.value;
    if (this.initForm[event.target.name]['value'] === '') {
      this.initForm[event.target.name]['error'] = "This is demo error ==> " + event.target.name
      this.initForm[event.target.name]['valid'] = false;
      this.initForm['isValid'] = false;
    } else {
      this.initForm[event.target.name]['error'] = " ";
      this.initForm[event.target.name]['valid'] = true;
    }
    this.setState({ formValue: this.initForm })
  }

  render() {
    return <div className="component-login">
      <form onSubmit={this.submitHandler.bind(this)} className="form col-md-6 col-md-offset-3">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input className="form-control" type="email" onChange={this.changehandler.bind(this)}
            defaultValue={this.state.formValue['email']['value']}
            placeholder="Email" name="email"></input>
          {(() => {
            if (!this.state.formValue['email']['valid']) {
              return (
                <div className="alert alert-danger">{this.state.formValue['email']['error']}</div>
              )
            }
          })()}
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password
              </label>
          <input className="form-control" type="password" onChange={this.changehandler.bind(this)}
            defaultValue={this.state.formValue['password']['value']}
            placeholder="Password" name="password"></input>
          {(() => {
            if (!this.state.formValue['password']['valid']) {
              return (
                <div className="alert alert-danger">Error</div>
              )
            }
          })()}

        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">Login</button>
          {/*  disabled={this.state.formValue['valid']?'false':'true'} */}
        </div>
      </form>
    </div>;
  }
}
// export default connect(
//     ({ login }) => ({ ...login }),
//     dispatch => bindActionCreators({ ...loginActions }, dispatch)
//   )( login );