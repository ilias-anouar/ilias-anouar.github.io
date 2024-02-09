console.log(sessionStorage.auth);

if (sessionStorage.auth === undefined || sessionStorage.auth === 'undefined') {
    location.href = '/'
    console.log(sessionStorage.user);
}

let authO = JSON.parse(sessionStorage.auth)
if (authO == 0 || authO == undefined) {
    location.href = '/'
}