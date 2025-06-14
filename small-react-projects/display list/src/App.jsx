import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  const list = ["item 1", "item 2", "item 3", "item 4", "item 5"];
  return (
    <>
      <div>
        <ul>
          {
            list.map((item) => (
              <li>{item}</li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default App
