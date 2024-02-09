let mainLogin = /ilias(@@|&&)\w\s\d{3}/
let mainPassword = /portfolio(@@|&&)\d{3}\s2001/

$(document).on('click', "#access", e => {
    console.log('test');
    let login = $('#login').val()
    console.log(login);
    let password = $('#password').val()
    console.log(password);
    if (login == "" || password == "") {
        alert("all values required !!")
        return
    }
    let testLogin = mainLogin.test(login)
    console.log(`test login : ${testLogin}`);
    if (!testLogin) {
        alert('bad value for login !!')
        return
    }
    let testPassword = mainPassword.test(password)
    if (!testPassword) {
        alert('bad value for password !!')
    }
    if (testPassword && testLogin) {
        window.sessionStorage.setItem('auth', '1')
        document.location.href = './messages/'
    }
})