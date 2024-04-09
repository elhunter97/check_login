let login = prompt("Your login name");
if (login =='Admin'){
    let pass = prompt('Password');
    if (pass == 'TheMaster') {
        alert('Welcome');
    } else if(pass == null){
        alert('Canceled');
    } else {
        alert("Wrong Password");
    }
} else if(login=='null'){
    alert('Canceled');
} else {
    alert("I don't know u");
}