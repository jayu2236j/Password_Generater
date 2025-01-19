
function generatepassword(totallength,numLetters,numNumbers,numSpecial){

const lower_case = "qwertyuiopasdfghjklzxcvbnm";
const upper_case = "QWERTYUIOPASDFGHJKLZXCVBNM";
const specail = "!@#$%^&*()_+~`=?></\|";
const numbers = "1234567890";

let password = "";
let reminaingLength = totallength;
const getRandomChars = (source,count) =>{
    let chars = "";
    for(let i = 0; i < count;i++){
        chars += source.charAt(Math.floor(Math.random() * source.length));
    }
    return chars;
}

const nums = getRandomChars(numbers,numNumbers);
password += nums;
reminaingLength -= numNumbers;

const specials = getRandomChars(specail,numSpecial);
password += specials;
reminaingLength -= numSpecial;

const letters = getRandomChars(lower_case + upper_case + numLetters);
password += letters;
reminaingLength -= numLetters;

if(reminaingLength > 0){
    const allChars = lower_case + upper_case + specail + numbers;
    password += getRandomChars(allChars,reminaingLength);

}
    return password.split("").sort(() => Math.random() - 0.5).join("");
}

document.getElementById("create_button").addEventListener("click",() =>{
    const totallength = parseInt(document.getElementById("totallength").value);
    const numLetters = parseInt(document.getElementById("letters").value);
    const numNumbers = parseInt(document.getElementById("numbers").value);
    const numSpecial = parseInt(document.getElementById("specialChars").value);

    if(isNaN(totallength) || isNaN(numLetters) || isNaN(numNumbers) || isNaN(numSpecial)){
        alert("Please write valid numbers");
        return;
    }

    if(numLetters + numNumbers + numSpecial > totallength){
        alert("The sum of critrie is greater than total charactors , please enter correctly ")
        return;
    }

    if(totallength < 1 || totallength > 99){
        alert("Total length must be between1 to 99");
        return;
    }

    const password = generatepassword(totallength,numLetters,numNumbers,numSpecial);
    document.getElementById("password").value = password;
    
});