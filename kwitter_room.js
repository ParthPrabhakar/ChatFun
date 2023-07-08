var firebaseConfig = {
    apiKey: "AIzaSyBoTdwA49A11zeyZcA2bReahGL5PVWncnM",
    authDomain: "kwitter-ad274.firebaseapp.com",
    databaseURL: "https://kwitter-ad274-default-rtdb.firebaseio.com",
    projectId: "kwitter-ad274",
    storageBucket: "kwitter-ad274.appspot.com",
    messagingSenderId: "1080264033588",
    appId: "1:1080264033588:web:eefd29b843c92e4393d161"
  };
  localStorage.getItem("username")
  document.getElementById("username").innerHTML="Welcome"+username;

  function Addroom(){
    roomname=document.getElementById("roomname").value;
    firebase.database().ref("/").child(roomname).update({
      purpose:"adding room name"
    });
    localStorage.setItem("roomname", roomname);
    window.location="Chatfun_page.html";
  }
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log(Room_names);
row="<div class='room_names' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div>";
document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();

function redirecttoroomname(name){
  console.log(name);
  localStorage.setItem("roomname", name);
  window.location="Chatfun_page.html"
}
function Logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("roomname");
  window.location="index.html";
}
