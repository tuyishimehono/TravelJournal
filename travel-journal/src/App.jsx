import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import data from '../data'
import './App.css'

function App() {
  const places = data.map(item =>{
    return (
      <MainContent
          key = {item.id}
          item = {item}
      />
    )
  })
  return (
    <>
      <Navbar/>
      <div className='flex flex-col gap-5 divide-y-2'>
        {places}
      </div>
    </>
  )
}

export default App
