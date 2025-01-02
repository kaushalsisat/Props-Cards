import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import image1 from './assets/images/i.jpg'
import image2 from './assets/images/ii.jpg'
import image3 from './assets/images/iii.jpg'
import image4 from './assets/images/iv.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl font-bold underline text-gray-600 shadow-xl">
       Create Cards Using Props
    </h1>
     <div className='m-8'><Card username="Om" img={image1} /> </div>
     <div className='m-8'> <Card username="Karan" img={image2}/> </div>
     <div className='m-8'> <Card username="Vivek" img={image3}/> </div>
     <div className='m-8'> <Card username="Kaushal" img={image4}/> </div>
     <div className='m-8'> <Card /> </div>
    </>
  )
}

export default App
