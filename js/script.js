// Opening and closing sidebar functions section   */
function openSideMenu(){
    document.getElementById('side-menu').style.width = '250px';
}

function closeSideMenu(){
    document.getElementById('side-menu').style.width = '0';
}

// simple partial form validation using regular expressions
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('message').addEventListener('blur', validateMessage);


function validateName(e){

    let remove =  setTimeout(function(){
        document.querySelector('.alert-name').remove();
    }, 3000);

    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,18}$/;

    if(!re.test(name.value)){
        document.querySelector('.alert-name').textContent = 'Please enter your name';
        remove;
    }
    e.preventDefault();
}

function validateEmail(e){
    let remove =  setTimeout(function(){
        document.querySelector('.alert-email').remove();
    }, 3000);

    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(email.value)){
        document.querySelector('.alert-email').textContent = 'Please enter a valid email address';
        remove;
    }
    e.preventDefault();
}

function validatePhone(e){
    let remove =  setTimeout(function(){
        document.querySelector('.alert-phone').remove();
    }, 3000);

    const phone = document.getElementById('phone');
    const re = /^\(?\d{3}\)?[-. _]?\d{3}[-. _]?\d{4}$/;

    if(!re.test(phone.value)){
        document.querySelector('.alert-phone').textContent = 'Please enter a valid phone number';
        remove;
    }
    e.preventDefault();
}

function validateMessage(e){
    let remove =  setTimeout(function(){
        document.querySelector('.alert-message').remove();
    }, 3000);

    const message = document.getElementById('message').value;
    if(message == '' || message < 10){
        document.querySelector('.alert-message').textContent = 'Message should be at least 10 characters long';
        remove;
    }
    e.preventDefault();
}
