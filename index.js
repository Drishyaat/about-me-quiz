var readlineSync= require('readline-sync');
  const chalk= require("chalk");

var score=0;
  console.log(chalk.blue(":||HELLO THERE||:"));
  var userName= readlineSync.question("Enter ur Name ");
  console.log("Welcome" , userName);
  console.log(chalk.cyan("Do you know Drishya?"));
  console.log(chalk.yellow("LETS TAKE A QUIZ TO SEE!!"));
// Array for questions
var questions=[
  {
  question: "1) Where do I live? \n a) Delhi \n b) Kerala \n", 
  answer: "A"
  },
  {
    question:"2) Which is my birth month? \n a) June \n b) July \n ",
    answer: "B"
  },
  {                                                                  
   question: "3) What is my favorite colour? \n a) White \n b) Black \n",
   answer:"B"
  },
  {
    question: "4) Which is my favorite season? \n a) Winter \n b) Monsoon \n",
    answer: "B"
  },
  {
    question: "5) Do I have any allergies? \n a) Yes \n b) No \n",
    answer: "A"
  }]  
      
   function play(question,answer)
     {
       var userAnswer= readlineSync.question(question);
      if (userAnswer.toUpperCase()== answer.toUpperCase())
      {
        console.log(chalk.green("RIGHT"));
        score=score+1;
      }
      else {
        console.log(chalk.red("WRONG"));
      }

  
     }
// Loop for function call
for(var i=0;i<questions.length;i++)
  {
    var ques=questions[i].question;
    var ans=questions[i].answer;
    
    play(ques,ans);
  
  }
  console.log("FINAL SCORE", score);
// Array for high score
var highScore=[
  {
    name: "Drishya",
    score: 5
  },
  {
    name: "Akshita",
    score: 4
  },
  {
   name:"Diya",
   score: 3
  }
]
 if(highScore[0].score==score) 
 {
   console.log("CONGRATULATIONS!! You are tied at first place with", highScore[0].name);
   console.log("Send me a screenshot so that I can update the scoreboard");
 }
else if(highScore[1].score==score)
{
  console.log("CONGRATULATIONS!! You are tied at second place with", highScore[1].name);
  console.log("Send me a screenshot so that I can update the scoreboard");
}
else if(highScore[2].score==score)
{
console.log("CONGRATULATIONS!! You are tied at third place with", highScore[2].name);
console.log("Send me a screenshot so that I can update the scoreboard");
}  
console.log("~~THANK YOU FOR PLAYING~~");
   

