import React,{useState} from 'react'

export default function AddCatForm({onAddCat}) {

    const [name, setName] = useState('')
    const [latinName, setLatinName] = useState('')
    const [image, setImage] = useState('')

    const addCat = (e)=> {
        e.preventDefault()
        console.log(name)
        onAddCat({name, latinName, picture:image})
    }

  return (

    <div>AddCatForm
        <form onSubmit = {addCat}>
        <label>
            Name
        <input onChange = {(e)=> setName(e.target.value) }/>
        </label>
        
        
        <label>
            latinName
        <input onChange = {(e)=> setLatinName(e.target.value) }/>
        </label>
       

        <label>
            Image
        <input onChange = {(e)=> setImage(e.target.value) }/>
        </label>

        <button>
            Add Catto
        </button>

        </form>
    </div>
  )
}
