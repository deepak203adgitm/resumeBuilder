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



           

            <div className = "content-section">
                

                <div classname ="left-section">
                    <h1>Zety. The Best Resume Builder Online.</h1>
                Build a resume that gets you hired—
                </div>

                <div classname ="right-section">
                Try it yourself. Just pick one of 20+ professional resume templates, fill in the blanks, and download. The resume wizard will guide you every step of the way.
                </div>
                 </div>




                
            
            
            
       






        </div>

       
        
        );
    }
}
 
export default LandingPage;