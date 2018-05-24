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

  /************** */
  

  $('#btnSubscribe').click(function subscribeToNewsletter () {
    
    var newsletterUser = database.ref('newsletterUser/');
    
        var user = {
        name: $('#newsletterName').val(),
        email: $('#newsletterEmail').val()
        };
        // $('#subscribeMessage').show().slideDown(1000).delay(3000).slideUp();
        newsletterUser.push(user);
        $('#subscribeForm').hide(250);
        console.log('User added');
  });

$('#subscribe').val('Subscribe');
$('#subscribeForm').hide();

$('#btnCancelSubscribe').click( () => $('#subscribeForm').hide());
$('#subscribe').click( () => $('#subscribeForm').toggle(250));