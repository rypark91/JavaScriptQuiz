let quiz = [{
    question: 'What is the correct syntax for referring to an external javascript file called "ex.js"?',
    choices: ["<script href='ex.js'></script>", "<script src='ex.js'></script>", "<script fl='ex.js'></script>"],
    choicesApperance: ["&lt;script href='ex.js'&gt;&lt;/script&gt;", "&lt;script src='ex.js'&gt;&lt;/script&gt;", "&lt;script fl='ex.js'&gt;&lt;/script&gt;"],
    correctChoice: "<script src='ex.js'></script>"
    }, {
    question: "How do you get the number of elements in an array?",
    choices: ["arr.size", "arr.length", "arr.numOfElements", "arr.elements"],
    correctChoice: "arr.length"
    }, {
    question: "True or False: You don't have to use parenthesis for arrow functions with only one parameter.",
    choices: ["True", "False"],
    correctChoice: "True"
    }];

var score;
var firstTry;
var i;
var quizLength = quiz.length;


let questionBox = document.getElementById("question");
let choicesBox = document.getElementById("choicesList");
let checkButton = document.getElementById("checkAnswer");

checkButton.addEventListener('click', function(){
    var els = document.getElementsByName("choice");
    var k;
    for(k = 0; k < els.length; k++){
        if(els[k].checked){
            checkGuess(els[k].value, quiz[i].correctChoice);
            break;
        }
    }
});

function init(){
    score = 0;
    firstTry = true;
    choicesBox.innerHTML = '';
    i = 0;
    questionBox.innerText = "Question " + (i + 1) + " of " + quizLength + ": "
    + quiz[i].question;
    var j;
    var choiceLength = quiz[i].choices.length;
    if(i === 0){
    for(j = 0; j < choiceLength; j++){
        choicesBox.insertAdjacentHTML("beforeend", '<div class="choice"><input type="radio" name="choice" value="' + quiz[i].choices[j] + '"> ' + 
            quiz[i].choicesApperance[j] + '</choice><br>');
        }
     }
}

function nextQuestion(){
    i++;
    if(i === quizLength){
        if(score == quizLength){
            alert("Quiz Completed.  Nice Work!  " + score + " out of " + quiz.length + "!  A perfect Score!");
        }
        else{
            alert("Quiz Completed.  You got " + score + " out of " + quiz.length + ".  You can improve.");
        }
        init();
    }
    else{
        firstTry = true;
        choicesBox.innerHTML = '';
        questionBox.innerText = "Question " + (i + 1) + " of " + quizLength + ": "
        + quiz[i].question;
        var j;
        var choiceLength = quiz[i].choices.length;
        for(j = 0; j < choiceLength; j++){
            choicesBox.insertAdjacentHTML("beforeend", '<div class="choice"><input type="radio" name="choice" value="' + quiz[i].choices[j] + '"> ' + 
            quiz[i].choices[j] + '</div><br>');
        }
    }
}
function checkGuess(guess, answer){
    if(guess === answer){
        alert("Correct!  Good Job!");
        if(firstTry){
            score++;
        }
        nextQuestion();
    }
    else {
        alert("Incorrect. Try again.")
        firstTry = false;
    }
}


init();
