import React, { Component } from "react";
import "./SignIn.css";
import{Card,Buto} from 'react-bootstrap';




class SignIn extends Component {
  state = {
    id : "" ,
    pw : ""
  };


  onChangeHandler = (e) =>{
    let id = e.target.id;
    let value = e.target.value;
    this.setState({
      [id] : value
    })
  }

 

  render() {
    return (
     
      <div className = "Card" >

   

        <div className = "leftCard" >


  
        <div >
         
          <input type="text" id="id" value={this.state.id} placeholder =" ID" onChange={ (e) => {this.onChangeHandler(e)}  }/>
        </div>

        <div>
          
          <input type="text" id="pw" value = {this.state.pw}  placeholder ="Password"  onChange={ (e) =>{this.onChangeHandler(e)} }/>
        </div>

        <div>
           <button  className="sign-in-btn" onClick={ () => { this.props.login(this.state.id , this.state.pw) }  }>Sign In</button> 
        </div>
        </div>
        </div>

        


     
     
     
    );
  }
}

export default SignIn;