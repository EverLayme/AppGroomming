import React from "react";
import firebase from "./utils/Firebase";
import "firebase/auth";

function App() {
  firebase.auth().onAuthStateChanged(currentUser => {
    console.log(currentUser ? "Estamos Logeados" : "No estamos logeados");
  });
  return (
    <div>
      <h1>App Controlcan</h1>
    </div>
  );
}

export default App;
