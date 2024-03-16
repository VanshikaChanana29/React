import React from 'react'
import "./App.css"

const result = ({userAnswer , questions , resetQuiz = ()=>
{} }) => {

const correctAnswer = userAnswer.filter((answer)=> answer).length; 
  return (


    <div  className='result'>
        <h1>results</h1>
        <p>you answered {correctAnswer} out of {questions.length} questions correct <span onClick={resetQuiz}>Click here to retry</span></p>
        <ul>{
        questions.map((question , index)=>{
           return <li key={index} data-correct={userAnswer[index]}>
            Q{index+1}. {question.question}
           </li>
        })}</ul>
        
    </div>
  )
}

export default result