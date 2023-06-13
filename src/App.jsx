import { useState } from 'react';
import Navbar from './components/Navbar';
import Routes from './components/Routes';
import Footer from './components/Footer';

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  return (

      <div className={darkTheme? 'dark': ''}>
        <div className=" dark:bg-gray-900 dark:text-gray-200 min-h-screen">
          <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
          <Routes />
          <Footer />
      </div>
    </div>
  )
}

export default App
