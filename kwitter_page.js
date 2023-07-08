var firebaseConfig = {
      apiKey: "AIzaSyBoTdwA49A11zeyZcA2bReahGL5PVWncnM",
      authDomain: "kwitter-ad274.firebaseapp.com",
      databaseURL: "https://kwitter-ad274-default-rtdb.firebaseio.com",
      projectId: "kwitter-ad274",
      storageBucket: "kwitter-ad274.appspot.com",
      messagingSenderId: "1080264033588",
      appId: "1:1080264033588:web:eefd29b843c92e4393d161"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    username=localStorage.getItem("username");
    roomname=localStorage.getItem("roomname");
function Send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
      name:username,
      message: msg,
      like:0
      });
} 


function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1=message_data["name"];
message=message_data["message"];
like=message_data["like"];

namewithtag="<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>";
messagewithtag="<h4 class='message_h4'>"+message+"</h4>";
buttonwithtag="<button class='btn btn-warning glyphicon glyphicon-thumbs-up' id="+firebase_message_id+" value="+like+" onclick='updatelikes(this.id)'>Like: "+like+"</button><hr>";
row=namewithtag+messagewithtag+buttonwithtag;

document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function updatelikes(message_id){
      console.log(message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);

      firebase.database().ref(roomname).child(message_id).update({
            like:updated_likes
      });
}

function Logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}
