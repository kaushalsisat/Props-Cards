import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import image from './assets/images/i.jpg'
import image from './assets/images/ii.jpg'
import image from './assets/images/iii.jpg'
import image from './assets/images/iv.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl font-bold underline text-gray-600 shadow-xl">
       Create Cards Using Props
    </h1>
     <div className='m-8'><Card username="Om" img={image} /> </div>
     <div className='m-8'> <Card username="Karan" img={image}/> </div>
     <div className='m-8'> <Card username="Vivek" img={image}/> </div>
     <div className='m-8'> <Card username="Kaushal" img={image}/> </div>
     <div className='m-8'> <Card /> </div>
    </>
  )
}

export default App
