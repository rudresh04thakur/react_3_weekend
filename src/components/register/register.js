import React, { Component } from 'react';
import './register.scss'
import axios from 'axios';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as registerActions from "../../store/register/actions";
export default class register extends Component {
  initForm = {
    name: { value: "", error: "", valid: true },
    email: { value: "", error: "", valid: true },
    mobile: { value: "", error: "", valid: true },
    password: { value: "", error: "", valid: true },
    isValid : true
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
    if(this.state.formValue.isValid){
      axios.post("http://localhost/react_api/register.php",this.formValue).then((res)=>{
        console.log("Response from Server = >",res)
      }).catch((err)=>{
        console.log("Error in Communication = >",err)
      })
    }
    console.log("Form value === ", this.state.formValue)
  }

  changeHandler = (event) => {
    this.initForm[event.target.name]['value'] = event.target.value;
      if(this.initForm[event.target.name]['value']===''){
        this.initForm[event.target.name]['error'] = "This is demo error ==> "+event.target.name
        this.initForm[event.target.name]['valid']= false;
        this.initForm['isValid'] = false;
      }else{
        this.initForm[event.target.name]['error'] = "";
        this.initForm[event.target.name]['valid']= true;
        // this.initForm['isValid'] = true;
      }
    this.setState({formValue:this.initForm})
  }
  render() {
    return <div className="component-register">
      <form className="form col-md-6 col-md-offset-3" onSubmit={this.submitHandler.bind(this)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input className="form-control" onChange={this.changeHandler.bind(this)}
            defaultValue={this.state.formValue['name']['value']} name="name"></input>
          {(() => {
            if (!this.state.formValue['name']['valid']) {
              return (
              <div className="alert alert-danger">{this.state.formValue['name']['error']}</div>
              )}
          })()}

        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" onChange={this.changeHandler.bind(this)}
            defaultValue={this.state.formValue['email']['value']} name="email"></input>
            {(() => {
            if (!this.state.formValue['email']['valid']) {
              return (
              <div className="alert alert-danger">{this.state.formValue['email']['error']}</div>
              )}
          })()}
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input className="form-control" onChange={this.changeHandler.bind(this)}
            defaultValue={this.state.formValue['mobile']['value']} name="mobile"></input>
            {(() => {
            if (!this.state.formValue['mobile']['valid']) {
              return (
              <div className="alert alert-danger">{this.state.formValue['mobile']['error']}</div>
              )}
          })()}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" onChange={this.changeHandler.bind(this)}
            defaultValue={this.state.formValue['password']['value']} name="password"></input>
            {(() => {
            if (!this.state.formValue['password']['valid']) {
              return (
              <div className="alert alert-danger">{this.state.formValue['password']['error']}</div>
              )}
          })()}
        </div>
        <div className="form-group">
          <button className="btn btn-success">Register</button>
          {/*  disabled={this.state.isValid ? false: true} */}
        </div>
      </form>
    </div>;
  }
}
// export default connect(
//     ({ register }) => ({ ...register }),
//     dispatch => bindActionCreators({ ...registerActions }, dispatch)
//   )( register );