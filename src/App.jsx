import './App.css'
import { useCatImage } from './hooks/catImage.jsx'
import { useCatFact } from './hooks/catFact.jsx'

function App() {
  const { fact, refreshCatFact}  = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  
  const handleClick = async () => {
    refreshCatFact(); // Add parentheses to call the function
  }
  

  return (
    <main >
      <h1>Datos de gatitos:</h1>

      {fact && <p>{ fact }</p>}

      <button onClick={handleClick}>Nuevo dato</button>

      {imageUrl && <img src={imageUrl} alt='image'></img>}
    </main>
  )
}

export default App
