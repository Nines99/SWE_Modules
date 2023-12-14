import React,{useState} from 'react'
import './ComponentStyle.css';

export default function Emoji() {
    const [mood, setMood] = useState(false)
    console.log(mood)
  return (
    <div className = 'box'>
        <button onClick = {()=>setMood(!mood)}></button>
        Emoji 
        {mood }
        {mood ? 'happy': 'sad' }
        </div>
  )
}
