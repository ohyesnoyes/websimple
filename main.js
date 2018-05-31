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
$('.ctaMessage').html('<hr class="my-2"><p>Join my monthly newsletter for awesome updates, filled with poetry and musings.</p>'); 

/***** subscribe form ********* */
$('#btnSubscribe').click(function (event) {
    
    var newsletterUser = database.ref('newsletterUser/');
        const date = new Date;

        var user = {
        firstName: $('#newsletterFirstName').val(),
        lastName: $('#newsletterLastName').val(),
        email: $('#newsletterEmail').val(),
        date: date.toLocaleDateString()
        };
        
        newsletterUser.push(user, function(error) {
            //hide subscribe if no connection to firebase
            if (error){
              console.log('Error has occured during saving process');
              $('#alertMessage')
                .slideDown(250)
                .html('<p class="alert alert-danger">Oops! Something went wrong please check you connection and try again.</p>')
                .delay(2000)
                .slideUp(250);
            $('#subscribeForm').hide(250);
            $('.ctaMessage').hide();
            } else {
              console.log("Newsletter info has been saved successfully");
              $('#alertMessage')
                .slideDown(250)
                .html('<p class="alert alert-success">Thanks for joining!</p>')
                .delay(2000)
                .slideUp(250);
            $('#subscribeForm').hide(250);
            $('.ctaMessage').hide();
            }
          });
});

$('#subscribe').val('Subscribe');
$('#subscribeForm').hide();

$('#btnCancelSubscribe').click( function() {
    $('#subscribe').show();
    $('#subscribeForm').toggle(250);
    
});
$('#subscribe').click( function () {
    $('#subscribeForm').toggle(250);
    $('#subscribe').hide();
});

const commentMessage = "Please let me know in the comment box which services you are interested in.";

//display when focusing on form
$('#commentMessage')
    .html(commentMessage + '<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>')
    .attr('class', 'alert alert-warning')
    .on('click touch', function() {
        $('#commentMessage').hide();
    });

$('#btnComment').click(function (event) {

    var comment = database.ref('comments/');
        const date = new Date;

        var user = {
        firstName: $('#commentFirstName').val(),
        lastName: $('#commentLastName').val(),
        email: $('#commentEmail').val(),
        comment: $('#comment').val(),
        date: date.toLocaleDateString()
        };
        comment.push(user, function(error) {
            //hide subscribe if no connection to firebase
            if (error){
              console.log('Error has occured during saving process');
              $('#alertMessage')
                .slideDown(250)
                .html('<p class="alert alert-danger">Oops! Something went wrong please check you connection and try again.</p>')
                .delay(2000)
                .slideUp(250);
        
            } else {
              console.log("Comment has been saved successfully");
              $('#alertMessage')
                .slideDown(250)
                .html('<p class="alert alert-success">Message delivered!</p>')
                .delay(2000)
                .slideUp(250);
                
                $('#commentFirstName').val('');
                $('#commentLastName').val('');
                $('#commentEmail').val('');
                $('#comment').val('');
            }
          });

        
});