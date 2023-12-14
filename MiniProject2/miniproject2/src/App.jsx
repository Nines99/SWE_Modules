import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ResponsiveAppBar from './components/NavBar'
import AppRoutes from './routes/AppRoutes'
import { UserProvider } from './context/UserContext'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { tealTheme } from './theme/tealTheme'
import { purpleTheme } from './theme/purpleTheme'

import ThemeSwitcher from './components/ThemeSwitcher'


function App() {
  const [count, setCount] = useState(0)
  const [theme, setCurrTheme] = useState(tealTheme)

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: 'dark',
  //   },
  // });

  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <main>This app is using the dark mode</main>
    <ThemeSwitcher onChangeTheme = {setCurrTheme}/>

    <UserProvider>

      <ResponsiveAppBar/>

      <AppRoutes/>


    </UserProvider>
    </ThemeProvider>
    </>
  )
}

export default App
