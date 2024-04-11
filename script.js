let introBtn = document.getElementById("introBtn");
let intro = document.getElementById("intro");
let gameplay = document.getElementById("nameSubmit");
let username;
let nameBtn = document.getElementById("nameBtn");
let nameInput = document.getElementById("nameInput");
let greetingHeader = document.getElementById("greetingHeader");
let greetingBtn = document.getElementById("greetingBtn");
let rules = document.getElementById("rules");
let rulesBtn = document.getElementById("rulesBtn");
let encounter = document.getElementById("encounter");
let encounterHeader = document.getElementById("encounterHeader");
let encounterResultHeader = document.getElementById("encounterResultHeader");
let encounterResultParagraph = document.getElementById("encounterResultParagraph");
let encounterResult = document.getElementById("encounterResult");
let encounterBtn = document.getElementById("encounterBtn");
let exitBtn = document.getElementById("exitBtn");
let thanks = document.getElementById("thanks");


let dice = Math.floor(Math.random() * 6) + 1;
let randomEncounter = Math.floor(Math.random() * 5) + 1; 
// document.getElementById("introHeader").textContent = randomEncounter;
let restart =  0;




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
greetingBtn.onclick = function showRules(){
    greetingHeader.style.display = "none";
    greetingBtn.style.display="none";
    rules.style.display = "block";
}
rulesBtn.onclick = function startRandomEncounter(){
    rules.style.display = "none";
    encounter.style.display = "block";
}


    switch(randomEncounter){
        case 1:encounterHeader.textContent = `You have encountered a bandit!`;
        if(dice > 3){
            encounterResultHeader.style.color = "green";
            encounterResultHeader.textContent = `You defeated the bandit!`;
            encounterResultParagraph.textContent = `You rolled a: ${dice}`;
        }
        else{
            encounterResultHeader.style.color = "red";
            encounterResultHeader.textContent = `You were defeated the bandit!`;
            encounterResultParagraph.textContent = `You rolled a: ${dice}`;
        }
        break;
    
        case 2:encounterHeader.textContent = `You have encountered a chest!`;
        if(dice > 3){
            encounterResultHeader.style.color = "green";
            encounterResultHeader.textContent = `You found a tresure!`;
            encounterResultParagraph.textContent = `You rolled a: ${dice}`;
        }
        else{
            encounterResultHeader.style.color = "red";
            encounterResultHeader.textContent = `You found nothing!`;
            encounterResultParagraph.textContent = `You rolled a: ${dice}`;
        }
        break;
    
        case 3:encounterHeader.textContent = `You have encountered a village!`;
        if(dice > 3){
            encounterResultHeader.style.color = "green";
            encounterResultHeader.textContent = `The villagers greeted you!`;
            encounterResultParagraph.textContent = `You rolled a: ${dice}`;
        }
        else{
            encounterResultHeader.style.color = "red";
            encounterResultHeader.textContent = `The village turned out to be a bandit camp!`;
            encounterResultParagraph.textContent = `You rolled a: ${dice}`;
        }
        break;
    
        case 4:encounterHeader.textContent = `You have encountered a wanderer!`;
        if(dice > 3){
            encounterResultHeader.style.color = "green";
            encounterResultHeader.textContent = `The wanderer turned out to be friendly!`;
            encounterResultParagraph.textContent = `You rolled a: ${dice}`;
        }
        else{
            encounterResultHeader.style.color = "red";
            encounterResultHeader.textContent = `The wanderer turned out to be a bandit!`;
            encounterResultParagraph.textContent = `You rolled a: ${dice}`;
        }
        break;
        
        case 5:encounterHeader.textContent = `You have encountered a wolf!`;
        if(dice > 3){
            encounterResultHeader.style.color = "green";
            encounterResultHeader.textContent = `The wolf was friendly!`;
            encounterResultParagraph.textContent = `You rolled a: ${dice}`;
        }
        else{
            encounterResultHeader.style.color = "red";
            encounterResultHeader.textContent = `The wolf attacked you, left you dead!`;
            encounterResultParagraph.textContent = `You rolled a: ${dice}`;
        }
        break;
    }
    encounterBtn.onclick = function randomEncounterOutcome(){
        encounter.style.display = "none";
        encounterResult.style.display = "block";
    }
    exitBtn.onclick = function thanksFc(){
        encounterResult.style.display = "none";
        thanks.style.display = "block";
        
    }