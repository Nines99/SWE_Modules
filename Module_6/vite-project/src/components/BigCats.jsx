import React,{useState} from 'react'
import SingleCat from './SingleCat'
import AddCatForm from './AddCatForm'
import './ComponentStyle.css';

export default function BigCats() {

    const cats = [
        { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', picture: 'https://i.natgeofe.com/k/66d3a80c-f4c3-4410-845c-3543375eaa85/cheetah-watching_square.jpg'},
        { id: 2,name: 'Cougar', latinName: 'Puma concolor', picture:'' },
        { id: 3,name: 'Jaguar', latinName: 'Panthera onca', picture:'' },
        { id: 4,name: 'Leopard', latinName: 'Panthera pardus', picture:''},
        { id: 6,name: 'Snow leopard', latinName: 'Panthera uncia', picture:'https://i.natgeofe.com/k/e196909e-a9f9-4437-95db-7cd9a039254f/snow-leopard-fullbody_square.jpg' },
        { id: 7,name: 'Tiger', latinName: 'Panthera tigris', picture:'' },
        ]

    const [sorted, setSorted] = useState(cats)

    const addCat = (newCat)=> {
        console.log(newCat.name)
        newCat.id = sorted.reduce((maxId, cat) => Math.max(maxId, cat.id), 0) + 1; // more reliable
        setSorted([...sorted, newCat]);
    }

  return ( 
  <> 
  <div className = "box">
  
    <button onClick = {()=>setSorted(cats.sort())}>Alphabetically Sort</button>
    <button onClick = {()=>setSorted(cats.reverse())}>Reverse Sort</button>
    <button onClick = {()=>setSorted(cats.filter((cat)=> cat.latinName.startsWith('Panthera') ))}>Panthera Only</button>
    <button onClick = {()=>setSorted(cats)}>Reset</button>
  
  <ul> {sorted.map((cat,index) => 
   <li key = {index}> 
    <SingleCat  cat = {cat} /> </li> )} </ul> 
    
    <AddCatForm onAddCat = {addCat} />
</div>
    </>

  )
}