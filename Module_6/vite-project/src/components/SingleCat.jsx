import React from 'react'

export default function SingleCat(props) {
    console.log(props.cat)
  return (
    <div>
        {props.cat.name} - {props.cat.latinName}
        <img src = {props.cat.picture} width = '200px' ></img>
    </div>

  )
}
