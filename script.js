const questions=[
    {
        question: "What is the Capital city of Telangana",
        answers:[
            { text: "Warangal", correct: false },
            { text: "Nizamabad", correct: false },
            { text: "Hyderabad", correct: true },
            { text: "Karimnagar", correct: false },
        ]

    },

    {
        question: "What is the Capital city of Maharastra",
        answers:[
            { text: "Mumbai", correct: true },
            { text: "Pune", correct: false },
            { text: "Nagpur", correct: false },
            { text: "Nanded", correct: false },
        ]

    },

    {
        question: "What is the Capital city of Tamilnadu",
        answers:[
            { text: "Salem", correct: false },
            { text: "Trichy", correct: false },
            { text: "Coimbatore", correct: false },
            { text: "Chennai", correct: true },
        ]

    },

    {
        question: "What is the Capital city of Uttarpradesh",
        answers:[
            { text: "Prayagraj", correct: false },
            { text: "Lucknow", correct: true },
            { text: "Kanpur", correct: false },
            { text: "Agra", correct: false },
        ]

    },

    {
        question: "What is the Capital city of Karnataka",
        answers:[
            { text: "Mangalore", correct: false },
            { text: "Mysore", correct: false },
            { text: "Bengaluru", correct: true },
            { text: "Bidar", correct: false },
        ]

    },
];

const questionElement=document.getElementById("question");
const answerbutton=document.getElementById("answer-btns");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score =0;

function startQuiz(){
    currentQuestionIndex=0;
    score =0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbutton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    })
}

function resetState(){
    nextButton.style.display="none";
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect= selectedBtn.dataset.correct=="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerbutton.children).forEach(button=>{
        if(button.dataset.correct=="true"){
            button.classList.add("correct");

        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Write Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz()


