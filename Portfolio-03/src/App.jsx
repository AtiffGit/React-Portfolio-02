
import { useState } from 'react'

import Header from './components/Header'
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Connect from './components/Connect';


function App() {
  const[darkMode ,setDarkMode] = useState(false);
 

  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <main className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white' >
      <Hero/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
     <Connect/>

      </main>
    </div>
  )
}


export default App
