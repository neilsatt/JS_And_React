// Quiz Layout section - Object Literal since it's only used once 
var QuizUI = {
    displayNext: function() {
        if(quiz.hasEnded()){
            this.displayScore();
        } else {
            this.displayQuestion();
            this.displayChoices();
            this.displayProgress();
        }
    },   
displayQuestion: function() {
    
},

displayChoices: function() {
    
}
    
