 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyCGR-ckyVUhVl6cF69sKugKGRKdP5dgn0c",
      authDomain: "kwitter-project-d0c65.firebaseapp.com",
      projectId: "kwitter-project-d0c65",
      storageBucket: "kwitter-project-d0c65.appspot.com",
      messagingSenderId: "43268421131",
      appId: "1:43268421131:web:e5882321b691113bd0b90e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function logout()
    {
      
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Add_Room = childKey;
      //Start code
      console.log("Roomname-" + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function logout()
{
  localStorage.removeItem(Room_names)
  localStorage.removeItem("room_name")
  localStorage.removeItem(user_name)
}
user_name=localStorage.getItem("user_name").value;
