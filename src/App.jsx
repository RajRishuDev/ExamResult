

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Main from './components/Main/Main'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
/* The following line can be included in your src/index.js or App.js file */

function App() {
  return(
    <>
        <Navbar />
      <div>
        <Hero  className="container"/>
        <Main />
      </div>
    </>
  )
}

export default App
