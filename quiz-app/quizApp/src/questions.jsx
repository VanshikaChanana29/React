import React from 'react'
import "./App.css"

const questions = ({questions , onAnswerClick}) => {
  return (
    <div className='questions'>
        <h2>{questions.question}</h2>
        <ul className="options">
            {
                
                questions.answerOptions.map((option)=>{
                     return <li key={option.text}>
                        <button onClick={()=>onAnswerClick(option.isCorrect)}>{option.text}</button>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default questions