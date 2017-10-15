// Quiz Prototype 

// Constructor
function Quiz(questions) { // array of questions 
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
}

Quiz.prototype.guess = function(answer){
    if(this.getCurrentQuestion().isCorrectAnswer(answer)){
        this.score++;
    }
    this.currentQuestionIndex++; // go to next question
};

// just returns the next/current question, a cleaner way than using code in line 19 
Quiz.prototype.getCurrentQuestion = function() {
    return this.questions[this.currentQuestionIndex]; 
};

// Check when the quiz is over
Quiz.prototype.hadEnded = function() {
    return this.currentQuestionIndex >= this.question.length;
};

