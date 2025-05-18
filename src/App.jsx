import './index.css'
import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => res.json())
    .then(data => {
      const { fact } = data
      setFact(fact)

      const firstWord = fact.split(' ', 1).join(' ')
      console.log(firstWord)
      
      fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(response => {
          const { url } = response
          setImageUrl(url)
          console.log()
        })
    })
  }, [])

  return (
    <main>
    <h1>App Gatos</h1>
    {fact && <p>{fact}</p>}
    {imageUrl && <img src={`${imageUrl}`} alt=
    {`Image extracted using the first three words for :"${fact}"`} />}
    </main>
  )
}
 
export default App
 