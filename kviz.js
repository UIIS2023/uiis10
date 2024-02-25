var myQuestions = [
{
question: "Po čemu je dobila ime poznata pesma Santa Maria della Salute Laze Kostića?",
answers: {
a: 'Barokna crkva u Veneciji',
b: 'Bazilika Svetog Apolinarija u Classi',
c: 'Crkva Svete Marije Milostive u Milanu'
},
correctAnswer: 'c'
},
{
question: "Ko je autor dela Alhemičara?",
answers: {
a: 'Paulo Coelho',
b: 'Ivo Andrić',
c: 'Desanka Maksimović'
},
correctAnswer: 'a'
},
{
question: "Koliko dana ribar Santiago nije ulovio ribu?",
answers: {
a: '15',
b: '84',
c: '10'
},
correctAnswer: 'b'
},
{
question: "Ko je autor čuvene starogrčke tragedije Antigona?",
answers: {
a: 'Euripid',
b: 'Sofokle',
c: 'Aristofan'
},
correctAnswer: 'b'
},
{
question: "Ko je napisao poznato delo Hazarski rečnik?", 
answers: {
a: 'Milorad Pavić',
b: 'Fjodor Mihajlovič Dostojevski',
c: 'Franz Kafka' 
}, 
correctAnswer: 'a'
},
{
question: "Ko je autor dela Ujka Vanja?", 
answers: {
a: 'Anton Pavlovič Čehov',
b: 'Vilijam Šekspir',
c: 'Dante Aligijeri' 
}, 
correctAnswer: 'a'
},
{
question: "Koja je tema dela Zločin i kazna?", 
answers: {
a: 'Ubistvo',
b: 'Ljubav',
c: 'Preljuba' 
}, 
correctAnswer: 'a'
}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');


generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);


function generateQuiz(questions, quizContainer, resultsContainer, submitButton){


function showQuestions(questions, quizContainer){


var output = [];
var answers;


for(var i=0; i<questions.length; i++){


answers = [];



for(letter in questions[i].answers){
 
answers.push(
'<label>'
+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
+ letter + ': '
+ questions[i].answers[letter]
+ '</label>'
);
}


output.push(
'<div class="question">' + questions[i].question + '</div>'
+ '<div class="answers">' + answers.join('') + '</div>'
);
}


quizContainer.innerHTML = output.join('');
}


function showResults(questions, quizContainer, resultsContainer){


var answerContainers = quizContainer.querySelectorAll('.answers');


var userAnswer = '';
var numCorrect = 0;


for(var i=0; i<questions.length; i++){


userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

 
if(userAnswer===questions[i].correctAnswer){

numCorrect++;
answerContainers[i].style.color = 'darkgreen';
}
else{
answerContainers[i].style.color = 'red';
}
}

resultsContainer.innerHTML = numCorrect + ' od ' + questions.length + ' tacnih odgovora ';
}
 
showQuestions(questions, quizContainer);

submitButton.onclick = function(){
showResults(questions, quizContainer, resultsContainer);
}
}