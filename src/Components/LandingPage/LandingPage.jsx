import React, { Component } from 'react'
import reactDom from 'react-dom';
import {Link} from "react-router-dom";
import "./LandingPage.css";

class LandingPage extends Component {
    state = {  }

    render() { 
        return (
            <div className ="mainContent">

                <div className ="heading">
                    <h1>The Online Resume Builder You Deserve</h1>
                    
                    <p className ="para"> Creating a Professional Resume and Cover Letter Has Never Been So Easy</p>
                    
                </div>

                <div className="choose-templates">
                {this.props.isAuth ?
                <Link to="/templates">
                    <button className="btn">Choose Templates</button> 
                </Link> :
                <Link to="/signin">
                <button className="btn-co">Choose Templates</button> 
                </Link>}
            </div>

            <div className ="imageLanding">
                <img src =" ./images/bgpic.png"/> 
            </div>


                
            
                
            
            
            <div className="benifit" >

            <div className="benifit-heading">
                <h1>Benefits of using a resume builder</h1>
            </div> 

            <div  className ="benifit-section">
                
                   

            <div className ="benifit-left-section">
            <h1>A Resume Layout That Stands Out</h1>
                    <p>A creative, professional layout can grab a recruiter's attention. Our resume layout optimizer makes sure all your content is aligned and organized so your resume looks like a work of art.</p>

              
            </div>
            
            <div className ="benifit-right-section">
            <h1>A Resume Layout That Stands Out</h1>
                    <p>A creative, professional layout can grab a recruiter's attention. Our resume layout optimizer makes sure all your content is aligned and organized so your resume looks like a work of art.</p>
                
              
            </div>
            </div>
            </div>
       






        </div>

       
        
        );
    }
}
 
export default LandingPage;