import React from 'react'
import './ComponentStyle.css';

export default function Greetings(props) {
    console.log(props)
return ( //if props exists, use props, if not use default
<div className = "box"> HELLO {props.name ?props.name: 'world' } !</div>
  )
}

