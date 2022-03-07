import React from "react";
import ReactDOM from "react-dom";
import Image from "./images/main1/connect.jpeg";
import Logo from "./images/main1/logo.jpeg";

export default function Content() {
        function handleClick() {
            console.log("I Was Clicked!!");
        }
    return (
        <div className="body">

               <div className="main-content">
               <div className="header">
                <img src={require("./images/main1/logo.jpeg")} className="logo" alt="this"/>
                <button onClick={handleClick} id="myButton">
                    <img src={require("./images/main1/connect.jpeg")} className="connect" alt="this"/>
                </button>
            </div>
        <div className="content">
            <h1>Stay with You, 
                <span>Always.</span>
                </h1>
      </div>
      <div className="Search">
                 <h4>Search for Her/Him 
                      <a href="#">
                          <img src={require("./images/main1/main-search-arrow.png")} className="searchRight" alt="this"/>
                      </a>
                </h4>
      </div>
            <div className="Main">
                <div className="Images">
                      <img src={require("./images/main1/1st-wallet-profile.jpeg")} className="Him" alt="this"/>                   
                      <img src={require("./images/main1/heart-arrow.jpeg")} className="Her" alt="this"/>
                      <img src={require("./images/main1/2nd-wallet-profile.jpeg")} className="Love" alt="this"/>
                </div>
                <div className="items">
                              <img src={require("./images/main1/ddd.jpeg")} className="itemsImage" alt="this"/>
                          </div>
                  </div>
              </div>

    </div>
    )
}
