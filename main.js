 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAXiOngasyk5KwHZ4RKUlp6KiaWDB2wNq8",
    authDomain: "comohyesnoyesdb-7a196.firebaseapp.com",
    databaseURL: "https://comohyesnoyesdb-7a196.firebaseio.com",
    projectId: "comohyesnoyesdb-7a196",
    storageBucket: "comohyesnoyesdb-7a196.appspot.com",
    messagingSenderId: "177275647537"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  

  function subscribeToNewsletter () {
  
  var newsletterUser = database.ref('newsletterUser/');
  
    var user = {
    name: document.getElementById('newsletterName').value,
    email: document.getElementById('newsletterEmail').value
    };
    newsletterUser.push(user);

  console.log('User added');
  // isSubscribed = true;
  // users.push(user);
  
  }

function cancelSubscribe (){
    subscribeForm.style.display = "none";
}

const subscribe = document.getElementById('subscribe');
subscribe.value = "Subscribe";
subscribe.style.backgroundColor = "#455274";
const subscribeForm = document.getElementById('subscribeForm');
subscribeForm.style.display = "none";

subscribe.addEventListener('click', () => {
     if (subscribeForm.style.display === "none"){
        subscribeForm.style.display = "block";
        subscribe.style.backgroundColor = "darkRed";
        subscribe.value = "Close";
    } else {
        subscribeForm.style.display = "none";
        subscribe.style.backgroundColor = "#455274";
        subscribe.value = "Subscribe";
    }
});