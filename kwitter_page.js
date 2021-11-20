const firebaseConfig = {
      apiKey: "AIzaSyAvLWd7BpWVKC8UdyZzNaNnkZPKutiYPCY",
      authDomain: "kwitter-3c9ad.firebaseapp.com",
      databaseURL: "https://kwitter-3c9ad-default-rtdb.firebaseio.com",
      projectId: "kwitter-3c9ad",
      storageBucket: "kwitter-3c9ad.appspot.com",
      messagingSenderId: "685602894791",
      appId: "1:685602894791:web:44cec45cd773d4b056dfe2"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").value;

          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
