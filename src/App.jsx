
import './App.css'
import Header from './components/Header'
import Body from './components/Body'


function App() {

console.log(<Body/>) //this is an object at the end of the day, this object is basically react virtual dom
  return (
    <>
      
    <Header/>
    <Body/>
  
    </>
  )
}

export default App
