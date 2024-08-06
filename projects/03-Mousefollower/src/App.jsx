import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x:0, y:0})
  useEffect(() =>{
    console.log({enabled});
    const handleMove = (event) => {
      const {clientX, clientY} = event;
      
      setPosition({x: clientX , y: clientY})
      console.log(position.x, position.y)
    }

    if(enabled){
      window.addEventListener('pointermove',handleMove)
    }
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
    
  },[enabled])
  return (
    <main>
      {enabled &&(
        <div style={{
          position: 'absolute',
          backgroundColor: 'rgba(0,0,0,0.2)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: '40px',
          height: '40px',
          transform: `translate(${position.x}px, ${position.y}px)`
        }} />
      )
      }
      
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar': 'activar'}
      </button>
    </main>
  )
}

export default App
