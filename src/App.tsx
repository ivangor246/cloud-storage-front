import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Счет: <b>{count}</b></p>
      <div className='flex justify-center gap-4'>
        <button className='text-red-500 cursor-pointer' onClick={() => setCount(count + 1)}>Увеличить</button>
        <button className='text-red-500 cursor-pointer' onClick={() => setCount(count - 1)}>Уменьшить</button>
      </div>
    </>
  )
}

export default App
