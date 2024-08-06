import {useState, useEffect} from "react"
import './App.css'

const ENDPOINT_RANDOM_FACT ='https://catfact.ninja/fact'


export function App (){
    const [fact, setFact] = useState()
    const[imageUrl, setImageUrl] = useState()

    useEffect(() =>{
        fetch(ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const {fact } = data
                setFact(fact)

    })
    },[])
    useEffect(() =>{
        if(!fact) return
        const firstWord = fact.split(' ',3).join(' ')
        console.log(firstWord)

        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
            .then(respuesta => respuesta.json())
            .then(response => {
            const { _id } = response
            console.log("este es el url: "+_id)
            console.log(response)
            
            setImageUrl(`https://cataas.com/cat/${_id}/says/${firstWord}`)
                 })
            
    },[fact])

    return(
        <main>
            <h1>app do gatinhos</h1>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt={`image extracted using the words for `}/>}
            </section>
            
            
        </main>
        
    )
}