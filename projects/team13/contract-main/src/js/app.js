App = {
  web3Provider: null,
  contracts: {},

  init: async function() {
    return await App.initWeb3();
  },

  initWeb3: async function() {
   // 最新dapp 浏览器或MetaMas
   if (window.ethereum) {
    App.web3Provider = window.ethereum;
    try {
     // 请求账号授权
     await window.ethereum.enable();
    } catch (error) {
      // User denied account access...
      console.error("User denied account access")
      console.error(error)
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    console.log("Dododo2")
    App.web3Provider = window.web3.currentProvider;
  }
  else {
    console.log("Dododo3")
    App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545');
  }
  web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function() {

      $.getJSON('NoteContract.json', function(data) {
        App.contracts.noteContract = TruffleContract(data);
        App.contracts.noteContract.setProvider(App.web3Provider);
  
        App.contracts.noteContract.deployed().then(function(instance) {
          App.noteIntance = instance;
          console.log(instance);
          return App.getNotes();
        });
      });

      web3.eth.getAccounts(function (error, accounts) {
        if (error) {
          console.log(error);
        }
        var account = accounts[0];
        App.account = account
      });
      
      console.log("initContract")
      return App.bindEvents();

  },

  bindEvents: function() {
     console.log("bindEvents")
    $(document).on('click', '.add_new', App.addNote);
    //$("#add_new").on('click', App.addNote);
  },


  getNotes: function() {
    App.noteIntance.getNotesLen(App.account).then(function(len) {
      App.noteLength = len;
      console.log(len)
      if (len > 0) {
        App.loadNote( len - 1);
      }
    }).catch(function(err) {
    });
  },  

  loadNote: function(index) {
    App.noteIntance.notes(App.account, index).then(function(note) {
      $("#notes").append(
      '<div > <textbox>'
      +App.account+":"+ note
      + '</textbox></div>' );
      if (index -1 >= 0) {
        App.loadNote(index - 1);
      }
    } ).catch(function(err) {
    });
  },

  addNote: function(event) {
    console.log("addNote");
        // 获取用户账号
        web3.eth.getAccounts(function(error, accounts) {
          if (error) {
            console.log(error);
          }
          var account = accounts[0];
          console.log(account);
    event.preventDefault();
    $("#loader").show();


      App.noteIntance.addNote($("#new_note").val(), {from: account}).then(function(result) {
        return App.watchChange();
     }).catch(function (err) {
       console.log(err.message);
     });
    });
  },

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
