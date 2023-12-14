import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Clock from './components/Clock_UseEffect'
import ActivityFinder from './components/ActivityFinder'
// import BitCoinRates from './components/BitCoinRates'
import BitCR from './components/BitCR'
import RefCounter from './components/RefCounter_UseRef'
import VideoPlayer from './components/VideoPlayer'
import ReducerCounter from './components/ReducerCounter'


import { UserProvider } from './context/UserContext'
// import LoginForm from './components/LoginForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProvider>

    {/* <LoginForm/> */}
      
      </UserProvider> 

      
    <Clock/>

    <ActivityFinder/>

    <BitCR/>

    <RefCounter/>

    <VideoPlayer/>

    <ReducerCounter/>

   


    </>
  )
}

export default App
