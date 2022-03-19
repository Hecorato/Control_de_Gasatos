import { useState, useEffect } from 'react'
import Header from './components/Header'

function App() {

  const[presupuesto,setPresupuesto]=useState(0);

return(
    <div>
        <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        onChange={e => setPresupuesto(e.target.value)}
        
        />
      </div>
  )
}

export default App
