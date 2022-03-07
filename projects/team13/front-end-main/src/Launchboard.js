import React from "react";
import ReactDOM from "react-dom";
import heartArrow from './images/heart-arrow.png';
import male from './images/male.png';

export default function Launchboard() {
        function handleClick(e) {
            e.preventDefault();
            console.log("Hurray!!!")
        }
    return (
        <div class="bodyLaunch">
            <link href="http://fonts.cdnfonts.com/css/nothing-you-could-say" rel="stylesheet" />
            <link href='https://fonts.googleapis.com/css?family=Texturina' rel='stylesheet'></link> 
            <div class="headerLaunch">
                <div class="navLaunch">
                    <img src={require("./images/main1/logo.png")} className="logo" alt="this"/>
                    <div className="navUser">
                        <img className="launchUser" src={male}  alt="user"/>
                        <span className="navUserName">Vitalik.bsc</span>
                    </div>
                </div>
        
        


                    <div className="launchMiddle">
                        <img className="launchHeaderHeart" src={require("./images/header-hearts.png")} alt="hearts" />
                        <div className="launchDetails">
        
                            <button href="#" className="launchBackButton" alt="back">
                                <img src={require("./images/back-arrow.png")} className="backButton" alt="back"/>
                            </button>
                            <div className="launchMessageBoard">
                                <div className="launchCouples">
                                        <div className="launchUserInfo">
                                    
                                            <img className="launchUser" src={male}  alt="this"/>
                                            <span className="launchUserName">Vitalik.bsc</span>
                                            <span className="launchOwnerTag">owner</span>                    
                                        </div>
                                        <img className="launchHeartArrow" src={heartArrow} alt="Hearts"/>
                                
                                        <div className="launchUserInfo">
                                            <img className="launchUser" src={require("./images/female.png")} alt="female" />
                                            <span className="launchUserName">0X31...1Z4</span>
                                        </div>
                                    </div>
                                <img className="launchHeartLock" src={require("./images/heart-lock.png")} alt="lock" />
                                <div className="launchMessageBar">
                                    <input id="message" name="message" placeholder='Type a message...' />
                                </div>
                                <button className="launchSubmitButton">Submit</button>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
   
    )
}