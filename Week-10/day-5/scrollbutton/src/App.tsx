 
import './App.css'
import ScrollToTopButton from './component/ScrollTopButton'

function App() {
 

  return (
    <>
       <div>
      <h1 style={{ textAlign: "center" }}>Scroll Down to See the Button</h1>
      <div style={{ height: "2000px", padding: "20px" }}>
        <p>Keep scrolling...</p>
      </div>
      <ScrollToTopButton />
    </div>
    </>
  )
}

export default App
