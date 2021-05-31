import React, { Component } from "react";
import firebaseApp from "../../firebase/firebaseConfig";
import "./SignUp.css";


class SignUp extends Component {
  state = {
    fname: "",
    lname:"",
    id: "",
    pw: "",
    error: "",
  };

  onChangeHandler = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    this.setState({
      [id]: value,
    });
  };


  signUpHandler = () =>{
      // this.props.signup !!!
      let id = this.state.id;
      let pw = this.state.pw;
      firebaseApp.auth().createUserWithEmailAndPassword(id , pw)
      .then( userInfo =>{
          console.log("Inside then");
          console.log(userInfo);
        let fname = this.state.fname;
        let lname = this.state.lname;
        let uid = userInfo.user.uid;
        let userCreatedPromise = firebaseApp.firestore().collection("users").doc(uid).set({
            "First Name" : fname ,
            "Last Name": lname ,
            "Email" : id ,
            "Password":pw ,
            "Uid" : uid ,
            "Resumes" : []

        })
        return userCreatedPromise;
      })
      .then( obj =>{
          console.log("User Created !!!!");
          console.log(obj);
      })
      .catch(error=>{
          console.log("inside catch");
          console.log(error);
          this.setState({
              error : error.message
          })
      })
      
  }

  render() {
    return (
      <div className ="Card-signup">
      <div className="signup">
        <div>
          
          <input
            type="text"
            id="fname"
            placeholder="first "
            value={this.state.fname}
            onChange={(e) => {
              this.onChangeHandler(e);
            }}
          />
        </div>  
        <div>
          
          <input
            type="text"
            id="lname"
            placeholder ="lastname"
            value={this.state.lname}
            onChange={(e) => {
              this.onChangeHandler(e);
            }}
          />
        </div>  
        <div>
          
          <input
            type="text"
            id="id"
            placeholder ="id"
            value={this.state.id}
            onChange={(e) => {
              this.onChangeHandler(e);
            }}
          />
        </div>
        <div>
         
          <input
            type="text"
            id="pw"
            placeholder="password"
            value={this.state.pw}
            onChange={(e) => {
              this.onChangeHandler(e);
            }}
          />
        </div>
           <button className="s-btn" onClick={ this.signUpHandler }>Sign Up</button> 

           <p>{this.state.error}</p>
      </div>
      </div>
    );
  }
}

export default SignUp;