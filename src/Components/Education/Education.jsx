import React, { Component } from "react";
import firebaseApp from "../../firebase/firebaseConfig";
import { educationCodes } from "../../util/codes.js";
import Skin1 from "../Skins/skin1";
import "./Education.css";

class Education extends Component {
  state = {
    codes: [
      "cgpa",
      "collegeCity",
      "collegeState",
      "collegeName",
      "degree",
      "graduationMonth",
      "graduationYear",
    ],
    contactDetails: {
      fname: "",
      lname: "",
      summary: "",
      email: "",
      phone: "",
      profession: "",
      street: "",
      city: "",
      state: "",
      country: "",
      pin: "",
    },
    educationDetails: {
      cgpa: "",
      collegeCity: "",
      collegeState: "",
      collegeName: "",
      degree: "",
      graduationMonth: "",
      graduationYear: "",
    },
    skinId: null,
  };
  onChangeHandler = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    let oldEducationDetails = this.state.educationDetails;
    this.setState({
      educationDetails: {
        ...oldEducationDetails,
        [id]: value,
      },
    });
  };

  componentDidMount() {
    if(this.props.location.state.resumeId){
      this.setState({
        contactDetails : this.props.location.state.contactDetails,
        skinId:this.props.location.state.skinId,
        educationDetails : this.props.location.state.originalDetails.educationDetails
      })
    }
    else{
      this.setState({
        contactDetails: this.props.location.state.contactDetails,
        skinId:this.props.location.state.skinId
      })
    }

    // get contactDetails of the selected Resume !!!
    // firebaseApp.firestore().collection("resumes").doc(this.props.resumeId).get().then( doc =>{
    //   console.log("Inside component did mount of education !!!");
    //   let {contactDetails , educationDetails , skinId} = doc.data();
    //   // console.log(contactDetails);
    //   // console.log(skinId);
    //   this.setState({
    //     contactDetails : contactDetails ,
    //     educationDetails : educationDetails,
    //     skinId : skinId
    //   })
    // })
  }

  nextButtonHandler = async () => {
    // console.log("next button clicked !!");
    // // save contactDetails object in doc
    // await firebaseApp
    //   .firestore()
    //   .collection("resumes")
    //   .doc(this.props.resumeId)
    //   .update({
    //     educationDetails: this.state.educationDetails,
    //   });
    if(this.props.location.state.resumeId){
      this.props.history.push({
        pathname: "/finalize",
        state: {
          contactDetails: this.state.contactDetails,
          educationDetails : this.state.educationDetails,
          skinId: this.state.skinId,
          originalDetails : this.props.location.state.originalDetails ,
          resumeId : this.props.location.state.resumeId
        },
      });
    }
    else{
      let {contactDetails , skinId} = this.props.location.state;
      let { educationDetails } = this.state;
      this.props.history.push({ pathname:"/finalize" , state:{contactDetails , educationDetails , skinId}   });
    }

  };

  backButtonHandler = () => {
    console.log("back button clicked !!");
    // this.props.history.goBack();
    this.props.history.push({
      pathname: "/contact",
      state: {
        contactDetails: this.props.location.state.contactDetails,
        skinId: this.props.location.state.skinId,
      },
    });
  };

  render() {
    return (
      <div className="contact-details">
        <div className="education-form">
          {this.state.codes.map((code) => {
            return (
              <div className="contact-form-element" key={code}>
                <label htmlFor="">{educationCodes[code]}</label>
                <input
                  type="text"
                  id={code}
                  value={this.state.educationDetails[code]}
                  onChange={(e) => {
                    this.onChangeHandler(e);
                  }}
                />
              </div>
            );
          })}
          <button className="btn" onClick={this.nextButtonHandler}>
            Next
          </button>
          <button className="btn" onClick={this.backButtonHandler}>
            Back
          </button>
        </div>
        <div className="resume-viewer">
          {/* get skin according to skinId */}
          {/* <Skin skinId={this.state.skinId} contactDetails = {this.state.contactDetails} ></Skin> */}
          <Skin1
            contactDetails={this.state.contactDetails}
            educationDetails={this.state.educationDetails}
          ></Skin1>
        </div>
      </div>
    );
  }
}

export default Education;