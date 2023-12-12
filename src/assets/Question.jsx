import React from 'react'
import { SingleQuestion } from './singleQuestion'

export const Questions = ({questions,activeId,toggleId}) => {
  return (
    <section className='container'>
        <h1>Questions</h1>
        {questions.map((question)=>{
            return <SingleQuestion key={question.id} {...question} activeId={activeId} toggleId={toggleId} />
        })}
    </section>
  )
}
