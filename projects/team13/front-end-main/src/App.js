import React from "react";
import ReactDOM from "react-dom";
import Image from "./images/main1/connect.jpeg";
import Logo from "./images/main1/logo.jpeg";
import { useEffect, useState } from "react";

export default function Content() {
        function handleClick() {
            //console.log("I Was Clicked!!");
            const App = () => {

              //state variable to store user's public wallet 
              const [currentAccount, setCurrentAccount] = useState("");
              
              // check wallet connection when the page loads
              const checkIfWalletIsConnected = async () => {
              
               // access to window.ethereum
               const {ethereum} = window;
              
               //check if user has metamask 
               if(!ethereum) {
                 alert("Make sure you have metamask");
                 return;
               }
              
               //get the wallet account
               const accounts = await ethereum.request({method: 'eth_accounts'});
              
               //get the first account
               if(accounts.length !== 0){
                 const account = accounts[0];
                 console.log("Found account:", account);
              
                 //set the account as a state 
                 setCurrentAccount(account);
               }
               else{
                 console.log("No account");
               }
              }
              
              // connect to wallet 
              const connectWallet = async () => {
               try {
                 // get the wallet 
                 const {ethereum} = window;
              
                 // there is no wallet extension 
                 if(!ethereum) {
                   alert("Opps, looks like there is no wallet!");
                   return;
                 }
              
                 const currentNetwork = ethereum.networkVersion;
                 console.log("Current network", currentNetwork);
              
              // define avax network values 
                       const avax_mainnet = [{
                        chainId: '0xA86A',
                        chainName: 'Avalanche Mainnet C-Chain',
                        nativeCurrency: {
                          name: 'Avalanche',
                          symbol: 'AVAX',
                          decimals: 18
                        },
                        rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
                        blockExplorerUrls: ['https://snowtrace.io/']
                        }]
                
                        // request to add the new network 
                        const tx = await ethereum.request({method: 'wallet_addEthereumChain', params:avax_mainnet}).catch()
                        if (tx) {
                            console.log(tx)
                        }
                
              
                 // request access to account 
                 const accounts = await ethereum.request({ method: "eth_requestAccounts"});
              
                 //set the account in the state 
                 setCurrentAccount(accounts[0]); 
              
               }
               catch( error){
                 console.log(error);
               }
              }
              
              //run function checkIfWalletIsConnected when the page loads
              useEffect(()=> {
               checkIfWalletIsConnected();
              }, []);
              
              //connect to wallet
              const walletNotConnected = () => (
               <div className="btn">
              <button onClick={connectWallet} className="connect-to-wallet-button">
                 Connect to Wallet
               </button>
               </div>
              );
              
              //wallet connected
              const walletConnected = () => (
               <div>
                 <p>Connected to the wallet</p>
               </div>
              );
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
  }



/*import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import Content from "./Content.js"
import Launchboard from "./Launchboard.js";

function App() {
  return (
    <div>
          <Content />
    </div>
  )
}
export default App;
*/

// <img src={require("./images/Overlay1/dan.jpeg")} className="myImage"/>
