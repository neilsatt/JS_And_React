// Create the Quiz Questions 

var questions = [
    new Question("Who wrote the music for \'Star Wars'\?", ['John Williams', "Alex North"]), 
    new Question("Who wrote the music for \'American Beauty'\?", ['Thomas Newman', "Alex North"]), 
    new Question("Who wrote the music for \'The Cider House Rules'\?", ['Rachel Portman', "Alex North"]), 
    new Question("Who wrote the music for \'Psycho'\?", ['John Williams', "Alex North"]),
    new Question("Who wrote the music for \'A Fistful of Dollars'\?", ['Ennio Morricone', "Alex North"]), 
    new Question("Who wrote the music for \'The Pink Panther'\?", ['John Williams', "Alex North"]), 
    new Question("Who wrote the music for \'The Gladiator'\?", ['John Barry', "Hans Zimmer"]), 
    new Question("Who wrote the music for \'The Titanic'\?", ['John Williams', "James Horner"]),
    new Question("Who wrote the music for \'Toy Story'\?", ['Laura Karpman', "Alex North"])
    
];

// Create the Quiz 
var quiz = new Quiz(questions);

// Render/Display the Quiz questions 
QuizUI.displayNext();