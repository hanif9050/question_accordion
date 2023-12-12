import { useState } from "react";
import data from './data';
import { Questions } from "./assets/Question";

const App = () => {
  const[questions,setQuestions]=useState(data);
  const [activeId,setActiveId]=useState(null)
  const toggleId=(id)=>{
    const newId =id === activeId ? null : id
    setActiveId(newId)
  }
  return <main>
    <Questions questions={questions} activeId={activeId} toggleId={toggleId}/>
  </main>
};
export default App;
