function generatepassword(length){
    const lower_case = "qwertyuiopasdfghjklzxcvbnm";
    const upper_case = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const specail = "!@#$%^&*()_+~`=?></\|";
    const number = "1234567890";


let password = "";

for(let i = 0; i < length; i++){
    const rand = Math.floor(Math.random()* 4);
    switch(rand){
        case 0:
            password += lower_case.charAt(Math.floor(Math.random() * lower_case.length));
            break;
        case 1:
            password += upper_case.charAt(Math.floor(Math.random() * upper_case.length));
            break;
        case 2:
            password += specail.charAt(Math.floor(Math.random() * specail.length));
            break;
        case 3:
            password += number.charAt(Math.floor(Math.random() * number.length));
            break;
    }
}
return password;
}
document.getElementById("create_button").addEventListener("click" , () =>{
    const length = document.getElementById("length").value;
    if(length < 1 || length > 99){
        alert("Enter the valid digit between 1 to 99");
        return;
    }
    const password = generatepassword(length);
    document.getElementById("password").value = password;

}
);