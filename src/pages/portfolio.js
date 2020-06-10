import React from "react";
import "../styles/Portfolio.css";
import Travelapp from './travel app.png'
import Dayplanner from './day planner.png'
import Horiseon from './Untitled.png'
import Project2 from './project2.png'
import EmployeeHw from './employeehw.png'


function Portfolio(props){
    return(
        <div>
        <div class="row">
        <div class="col-lg-3">
          <a href="https://secure-shelf-77308.herokuapp.com/">
            <img src={Project2} alt="Project 2" class="img img-thumbnail"/>
          </a>
          
        </div>
        <div class="col-lg-9">
          <div class="text-center">
            <h1>Career Field Resource Wiki</h1>
            <p>This project created a full-stack app that allows users to post and get resources about job fields of their choice. My role in the craetion of this app was back-end SQL database managment and API routing </p>
          </div>
        </div>

      </div>
      
     
      <div class="row">
        <div class="col-lg-3">
          <a href=" https://mdcassaro.github.io/codinghw1/">
            <img src={Horiseon} alt="horiseon website" class="img img-thumbnail"/>
          </a>
          
        </div>
        <div class="col-lg-9">
          <div class="text-center">
            <h1>Horiseon Marketing Website</h1>
            <p>I was responsible for organizing and maintaining the code for Horiseon Marketing Website. The website was made compatible with various sized viewports. I gave the images an alt tags. The semantics were organized so header numbers came in order. All superflourious CSS tag designations were removed. Combined classes A,B, and C in CSS to make a more effecient stylesheet. Unneccessary ID tags were removed. Clearfix was administered to maintain website integrety when viewport is shrunk or on mobile devices.</p>
          </div>
        </div>

      </div>
      

     
    
      <div class="row" >
        <div class="col-lg-3">
          <a href="https://mdcassaro.github.io/homework-5/">
            <img src={Dayplanner} alt=" day planner" class="img img-thumbnail"/>
          </a>
        </div>
             
        <div class="col-lg-9">
          <div class="text-center">
            <h1>Day Planner</h1>
            <p>I planner for your day. Once the time ahs passed the hours turn a different color notifying you the event has passed. The date and time are located in the top. And all your daily information is located into local stotage.</p>
          </div>
        </div>
      </div>

      <div class="row" >
        <div class="col-lg-3">
          <a href="https://mdcassaro.github.io/newhw8/">
            <img src={EmployeeHw} alt="Employee Generator" class="img img-thumbnail"/>
          </a>
          
        </div>
        <div class="col-lg-9">
          <div class="text-center">
            <h1>Employee Generator</h1>
            <p>This backed-end app creates an employee database using Node js. and generates an upfront html and Css to present to the user.</p>
        </div>

      </div>
      </div>

      
      <div class="row" >
        <div class="col-lg-3">
          <a href="https://ionathas78.github.io/LiveTravelInfo/">
            <img src={Travelapp} alt="Travel App" class="img img-thumbnail"/>
          </a>
        </div>
        <div class="col-lg-9">
          <div class="text-center">
            <h1>Live Travel Info App</h1>
            <p>This one stop app for all future vaction planning. Includes weather, currency convertion, flight prices and even a live webcam of the destinations</p>
          </div>
        </div>
      </div>
      </div>
      )
    }

    export default Portfolio;