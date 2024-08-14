import {useState,useEffect} from "react"
export function useCatImage({fact}){
    const[imageUrl, setImageUrl] = useState()

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
    return {imageUrl}
    }