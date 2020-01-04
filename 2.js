function emailValidity(email){
   
    var emailReg = /([0-9])+([a-z]+)+([@])+([gmail.com]+)/g;
    if (emailReg.test(email)){
        return true;
    }
    return false;
}

function passwordValidity(pass){
    var passCharReg = /([#]{1}[a-z]{5}[0-9]{2}[!]{1})/g;
    if (passCharReg.test(pass)){
        return true;
    }
    return false;
    
}

console.log(emailValidity('3dara@gmail.com')); // true
console.log(passwordValidity('#words99!'));  // true
console.log(emailValidity('3dagmail.com')); // false
console.log(passwordValidity('words99!'));  // false