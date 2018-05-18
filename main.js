const users = [];
// var user = {
//     name: '',
//     email: '',
//     comment:'',
//     isSubscribed: false
// }

const subscribe = document.getElementById('subscribe');
subscribe.value = "Subscribe";
subscribe.style.backgroundColor = "#455274";
const subscribeForm = document.getElementById('subscribeForm');
subscribeForm.style.visibility= "hidden";

subscribe.addEventListener('click', () => {
     if (subscribeForm.style.visibility === "hidden"){
        subscribeForm.style.visibility = "visible";
        subscribe.style.backgroundColor = "darkRed";
        subscribe.value = "Close";
    } else {
        subscribeForm.style.visibility = "hidden";
        subscribe.style.backgroundColor = "#455274";
        subscribe.value = "Subscribe";
    }
});

function subscribeToNewsletter (name, email) {
    name = document.getElementById('newsletterName').value;
    email = document.getElementById('newsletterEmail').value;
    user = {
        name: name,
        email: email
    }
    console.log('User added: ' + user.name + ' ' + user.email);
    isSubscribed = true;
    users.push(user);
    
    
    return user;

    
}

// for (i=0; i<users.length; i+=1){
//     console.log('Push to users[]: ' + users[i].name + ' ' + users[i].email);
// }

// window.addEventListener('change', () => {
    
// });



// let subscribeToNewsletter = (name, email) =>{
//     subscribe.name = prompt('what is your name?');
//     subscribe.email = prompt('what is your email?');

//     user = {
//         name: name,
//         email:email
//     }

//     return user;
// }

// var createNewUser = () => {
    
//     users.push(subsribeToNewsletter.user);

//     console.log(newUser);
// }
