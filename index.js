document.getElementById('submit-button').addEventListener('click',function(){
    var email = document.getElementById('login-email');
    var password = document.getElementById('login-pass');
    if (email.value == 'tasnimpricila27@gmail.com' && password.value == '12345'){
        window.location.href = 'banking.html';
    }
});


