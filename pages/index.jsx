import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function Home(){
  const [visitor, setVisitor] = useLocalStorageState("visitor", {
    defaultValue: []
  })
  
  const [inputName, setInputName] = useState("")
  const [inputAge, setInputAge] = useState("")

  return(
    <div >  
      <input onChange={(e)=> setInputName(e.target.value)} placeholder="name"/>
      <input onChange={(e)=> setInputAge(e.target.value)} placeholder="age"/>
      <button onClick={()=>{
        setVisitor((lastVisitor)=>{
          return [...lastVisitor, {id: lastVisitor.length, name: inputName, age: inputAge}]
        })
      }}>Push</button>
      {visitor.map((item)=>{
        return <><div>{item.name}</div> <div>{item.age}</div></>
      })}
    </div>
    
  )
}