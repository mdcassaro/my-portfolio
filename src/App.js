import React from 'react';
import Navbar from "./components/navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Wrapper from "./components/wrapper";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";



function App(){
  return(
    <BrowserRouter>
      <div>
        <Navbar/>
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/react-portfolio-final" component={About}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Wrapper>
      </div>
    </BrowserRouter>
  )
}

export default App;