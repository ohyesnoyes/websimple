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
        // $('#subscribeMessage').show().slideDown(1000).delay(3000).slideUp();
        newsletterUser.push(user);
        $('#subscribeForm').hide(250);
        console.log('User added');
        
        // cta success message to subscribe
        $('.ctaMessage')
            .slideDown(250)
            .html('<p class="alert alert-success">Thanks for joining!</p>')
            .delay(2000)
            .slideUp(250);

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
        comment.push(user);
        console.log('Comment added');

        
        // add if successfully pushed
        $('#commentMessage')
            .slideDown(250)
            .html('<p class="alert alert-success">Thanks for your comment!</p>')
            .delay(3000)
            .slideUp(250);

        $('#commentFirstName').val('');
        $('#commentLastName').val('');
        $('#commentEmail').val('');
        $('#comment').val('');
        
});