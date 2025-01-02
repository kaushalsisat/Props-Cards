import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl font-bold underline text-gray-600 shadow-xl">
       Create Cards Using Props
    </h1>
     <div className='m-8'><Card username="Om" img="/src/assets/images/i.jpg" /> </div>
     <div className='m-8'> <Card username="Karan" img="/src/assets/images/ii.jpg" /> </div>
     <div className='m-8'> <Card username="Vivek" img="/src/assets/images/iii.jpg" /> </div>
     <div className='m-8'> <Card username="Kaushal" img="/src/assets/images/iv.jpg" /> </div>
     <div className='m-8'> <Card /> </div>
    </>
  )
}

export default App
