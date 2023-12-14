import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Greetings from './components/Greetings';
import BigCats from './components/BigCats';
import Emoji from './components/Emoji';
import AddCatForm from './components/AddCatForm';
import Calculator from './components/Calculator';


// import HappyBirthday from './HappyBirthday.jsx'

function ExampleComponent() {
  return (
   <div className="ExampleComponent componentBox"> {/* see App.css for componentBox styles */}
      <h1>My Example Component</h1>
      <h3 style={{color: 'blue', textTransform: 'uppercase', fontStyle: 'italic', textDecoration: 'underline'}}>Welcome!</h3> {/* style object directly in JSX */}
      <p>My first React component!</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  const invalidJSX = <div><p>para1</p><p>para2</p></div>
  
  const whatIsJSX = <div style = {{color: 'lime'}}>
  <p>Is it JavaScript?</p>
  <p>Is it HTML?</p>
  <p>No, it's JSX!</p>
  </div>

  const spiderman = { name: 'Spiderman', alterEgo: 'Peter Parker', catchPhrase: 'With great power comes great responsibility' };
  const spideyJSX = (<div>
    
    <h3 style = {{color: 'red' ,}}> {spiderman.name} </h3>
    <blockquote> {spiderman.catchPhrase} </blockquote> <cite> {spiderman.alterEgo} </cite>
    
  </div>);


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>This is a Vite + React Webpage</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Click on count button to increase count by 1!
        </p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>

        <ExampleComponent/>

        <Greetings name = 'Aloha' />

        <BigCats/>

        <Emoji/>

        <Calculator/>
        
      </div>

        {/* This is a Comment */}

        {/* {spideyJSX}
        
        {whatIsJSX} */}

        {/* {HappyBirthday} */}

    </>
  )
}

export default App
