const quizData = [
    {
        question: 'Which is the default parameter?',
        a: 'fun =(x, y=5)=>{return x*y}',
        b: 'fun =(x)=>{return x*y}',
        c: 'fun =(x, y=5)={return x*y}',
        d: 'I have no idea about default parameter!',
        correct: 'a',
    }, {
        question: 'async and await in means..?',
        a: 'async function return promise then after await function take this promise',
        b: 'await only useable inside async function',
        c: 'async, await, fetch, then, catch and try all are promise in javascript.',
        d: 'All of above correct.',
        correct: 'd',

    }, {
 
     question: 'What is the meaning of map in java script?',
     a: 'together all array value.',
     b: 'it is update of for loop',
     c: 'both of a and b.',
     d: 'No idea',
     correct: 'c',

    }, {

        question: 'What is the meaning of filter in java script?',
        a: 'its filtering element from array.',
        b: 'its filtering from object.',
        c: 'its filtering water from dust',
        d: 'its filter element from array and for loop',
        correct: 'a',
    },{
        question: 'what is the meaning of reduce function in java script?',
        a: 'we ge each element from array by using reduce method.',
        b: 'we can add more value by using reduce function and give us each element.',
        c: 'both a and b are correct.',
        d: 'reduce is not a java script function!',
        correct: 'c', 
    },{
        question: 'What is the meaning of new key word in java script?',
        a: 'It create new object in java script',
        b: 'It create instance of class.',
        c: 'It returns the newly created object',
        d: 'All of them',
        correct: 'd',
    },{
        question: 'What is the meaning of the babel in java script?',
        a: 'Babel is transpiler and converts edg java script into ES5 which is support all browser.',
        b: 'Here, Including classes, fat arrows and multiline strings',
        c: 'both a and b are correct.',
        d: 'Babel is a name of humans',
        correct: 'c',
    },{
        question: 'Which are feature of ES6?',
        a: 'let, const, this key word, arrow function, promise, find, map, reduce, default parameters, global scope vs local scope etc.',
        b: 'this key word indicate current object value , promise contain fetch, then, catch, async, await, try .',
        c: 'arrow function is nothing but name function but contain arrow key after parameter.',
        d: 'All of them.',
        correct: 'd',
    },


];

const Question = document.getElementById('question');
const oneQ = document.getElementById('one');
// console.log(oneQ);
const twoQ = document.getElementById('two');
const threeQ = document.getElementById('three');
const fourQ = document.getElementById('four');
const submitButton = document.getElementById('submit-button');
const answers = document.querySelectorAll('.answer');
const quizQ = document.getElementById('quiz');

let currentQuiz = 0;
let score = 0;
loadQuiz();
  

function loadQuiz(){
    deselectAnswer();
    const currentQuizData =  quizData[currentQuiz];
   Question.innerText = currentQuizData.question;

    oneQ.innerText = currentQuizData.a;
    twoQ.innerText = currentQuizData.b;
    threeQ.innerText = currentQuizData.c;
    fourQ.innerText = currentQuizData.d;     
 
    
}
                                      
    answers.forEach((answer) => {
        
        if(answer.checked){
            valeOfAnswer = answer.id;
        }
    });

    return valeOfAnswer;
}

 function deselectAnswer(){
     answers.forEach((answer) =>{
         answer.checked = false;
     });
 }

submitButton.addEventListener('click', () =>{
    
   const valeOfAnswer = getSelected();
   console.log(valeOfAnswer);

if(valeOfAnswer){
    if(valeOfAnswer === quizData[currentQuiz].correct){
        score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length){
        loadQuiz();
    }
    // else{
    //     alert('your total marks')
    // }
    else{
        quizQ.innerHTML =`
        <h2>Your Total Correct Answer: ${score}/${quizData.length}</h2>
        <button onclick="location.reload()">Reload</button>`;
    }
}

});


