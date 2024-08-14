import {useState, useEffect} from "react"
import './App.css'
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"



export function App (){
    const {fact, refreshRandomFact} = useCatFact()
    const {imageUrl} = useCatImage({ fact})

    
    
    
    const handleClick = async() =>{
        refreshRandomFact()
    }

    return(
        <main>
            <h1>app do gatinhos</h1>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt={`image extracted using the words for `}/>}
                
            </section>
            <section>
                
                <button onClick={handleClick}> Get new fact</button>
            </section>            
            
        </main>
        
    )
}