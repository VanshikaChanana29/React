import { useState } from "react"
import "./App.css"
import questions from "./constants/questions.json";
import Question from "./questions"
import Result from "./result";
function App() {
 const [currentQuestions , setcurrentQuestions] = useState(0);
 const [userAnswer , setuserAnswer] = useState([]);

const handleNextQuestion = (isCorrect)=>{
      setcurrentQuestions(currentQuestions+1); 
      setuserAnswer([...userAnswer , isCorrect]); 
}

const resetQuiz = ()=>{
  setcurrentQuestions(0); 
  setuserAnswer([]); 
}
  return (
   
      <div className="app">
        <h1>World Quiz app</h1>
        {
          currentQuestions < questions.length && (
            <Question questions={questions[currentQuestions]} onAnswerClick={handleNextQuestion}/>
          )
        }

        { currentQuestions === questions.length && <Result userAnswer={userAnswer} questions={questions} resetQuiz={resetQuiz}/>} 
      
      </div>
   
       
  )
}

export default App
