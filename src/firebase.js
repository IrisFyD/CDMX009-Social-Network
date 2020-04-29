//Ref firebase
let providerG = new firebase.auth.GoogleAuthProvider();
let providerFB = new firebase.auth.FacebookAuthProvider();
let db = firebase.firestore();


//Login Google
function loginGoogle(){
  firebase.auth()
  .signInWithPopup(providerG)
  .then(function(result) {
    //console.log(result.user);
    saveDataUser(result.user);
    if (result.user.emailVerified){
      window.open('#/','_self')
    }
  });
}
//Login facebook
function loginFB(){
  firebase.auth()
  .signInWithPopup(providerFB)
  .then(function(result) {
    console.log(result.user);
    saveDataUser(result.user);
    if (result.user.emailVerified){
      window.open('#/','_self')
    }
  });
}

function createEmailPass(email, password, names) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      saveDataUser(result.user);
      result.user.updateProfile({
        displayName: names,
      });
      if (result.user.updateProfile){
        window.open('#/','_self')
      }
    })
    .catch((error) => {
      console.error(error);
      alert("ERROR");
    });
}

function registerUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const names = document.getElementById("names").value;

  createEmailPass(email, password, names);
}

//Save user by login
function saveDataUser(user){
  let userNew = {
    uid:user.uid,
    name:user.displayName,
    photo:user.photoURL
  }
  db.collection("users").doc(userNew.uid).set(userNew)
  .then(function() {
    console.log("Document successfully written!");
  })
  };


  //User login

  function loginUser(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
      window.open('#/', '_self');
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

  function loginUserEmail(){
    const email = document.getElementById("e-mail").value;
    const password = document.getElementById("password").value;
  
    loginUser(email, password);
  }

  function signOff(){
    firebase.auth().signOut().then(function() {
      window.open('#/login', '_self');
    }).catch(function(error) {
    });
    
  }


export  { loginGoogle, loginFB, registerUser, loginUserEmail, signOff};
