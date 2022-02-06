import React from "react";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    {/*<Chef /> 
    <Intro />   
    <Laurels />
    <Gallery /> 
    <FindUs /> 
    <Footer /> */}
  </div>
);

export default App;
// 59.16
// 1.10.03
