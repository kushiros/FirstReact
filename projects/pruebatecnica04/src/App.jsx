import {useState, useEffect} from "react"

const ENDPOINT_RANDOM_FACT ='https://catfact.ninja/fact'
const ENDPOINT_RANDOM_IMAGE_URL =`https://cataas.com/cat/says/${ENDPOINT_RANDOM_FACT}?size=50&color=red&json=true`

export function App (){
    const [fact, setFact] = useState('lore ipsum cat fact whatever')

    useEffect(() =>{
        fetch(ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => setFact(data.fact))
    },[])
    return(
        <main>
            <h1>app do gatinhos</h1>
            {fact && <p>{fact}</p>}
            
        </main>
        
    )
}