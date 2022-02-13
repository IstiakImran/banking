document.getElementById('login-submit').addEventListener('click', function(){
    const emailFild = document.getElementById('user-email');
    const userEmail = emailFild.value;
    // get user password
    const passFild = document.getElementById('user-password');
    const userpass = passFild.value;

    if( userEmail == 'helloworld' && userpass == 'hellohibyebye'){
        console.log('valid user');
    }
    else{
        console.log('unvalid user');
    }
})