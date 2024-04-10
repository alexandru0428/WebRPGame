let introBtn = document.getElementById("introBtn");
let intro = document.getElementById("intro");
let gameplay = document.getElementById("nameSubmit");
let username;
let nameBtn = document.getElementById("nameBtn");
let nameInput = document.getElementById("nameInput");
let greetingHeader = document.getElementById("greetingHeader");
let greetingBtn = document.getElementById("greetingBtn");


introBtn.onclick = function startGame(){
    intro.style.display = "none";
    nameSubmit.style.display = "block";

}
nameBtn.onclick = function getUsername(){
    nameSubmit.style.display = "none";
    username = nameInput.value;
    greetingHeader.textContent = `Nice to meet you ${username}`;
    document.getElementById("greeting").style.display = "block";    
    

}