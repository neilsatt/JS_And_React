// Question Prototype 

// Constructor 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices; // correct and incorrect 
    this.answer = answer;
}

//
Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
}