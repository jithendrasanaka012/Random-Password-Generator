const passwordgen = document.getElementById("password");
const lenght=9;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%&*()_+/*-";
const numbers = "0123456789";
const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword(){
    let password="";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    password += numbers[Math.floor(Math.random() * numbers.length )];

    while(lenght > password.length)
        {
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }
        passwordgen.value = password;
    
}

function copyPassword(){
    passwordgen.select();
    document.execCommand("copy");
}