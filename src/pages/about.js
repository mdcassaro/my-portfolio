import React from "react";
import myPic from './picture of me.jpg'
import "../styles/bootstrap.min.css"
import "../styles/about.css";




function About(props){
    return(
        <div className="container" >
                <div className="row">
                
                    <div className="card mt-2-primary">
                    
                    
                        <h1>About Me:</h1>
                    
                    <div className="row">
                        <div className="col-md-3 img-container">
                        <img src={myPic} alt={props.name} className="img-thumbnail"/>
                        </div>
                        <div className="col-md-9">
                        <p>
                            I am from Louisville, Ky. I majored in Biology from the University of Louisville. I obtained my MBA from Bellarmine University in Louisville, Ky. Prior to this program I have never coded or taken any action to code. This course was the first time I garnered an understanding of the behind the seen processes that go into making a website.
                        </p>
                        <div className="row">
                        <div class="col align-self-center">
                        <a href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3Aacae761d-9ce9-4c7a-8419-066358db3834"  target="noopener noreferer" class="btn btn-primary">Click to view my Resume</a>
                        </div>
                        </div>
                        
                        
                        
                        
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
      )
    }

    export default About;