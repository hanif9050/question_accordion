import React, { useState } from 'react'
import {AiOutlineMinus,AiOutlinePlus} from "react-icons/ai"

export const SingleQuestion = ({id,title,info,activeId,toggleId}) => {
    const [showInfo,setShowInfo]=useState(false);
    const isActive= id === activeId

  return (
    <article className='question'>
        <header>
            <h5>{title}</h5>
            <button className="question-btn" onClick={()=>toggleId(id)}>{isActive ? <AiOutlineMinus/>:<AiOutlinePlus/>}</button>
        </header>
       {isActive &&  <p>{info}</p>}

    </article>
  )
}
