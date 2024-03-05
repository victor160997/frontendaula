import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { Field } from './components/Field'
import viteLogo from '/vite.svg'
import './App.css'
import CalculateButtom from './components/CalculateButtom'

function App() {
  const [count, setCount] = useState(0)
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)
  const [result, setResult] = useState(0)

  useEffect(() => {
    console.log({ result })
  }, [result])

  return (
    <div className="mainContainer">
      <div className="result">
        {result}
      </div>
      <div>
        <Field value={value1} setValue={setValue1} />
        <Field value={value2} setValue={setValue2} />
      </div>
      <div>
        <CalculateButtom operation="soma" setResult={setResult} value1={value1} value2={value2} />
        <CalculateButtom operation="subtração" setResult={setResult} value1={value1} value2={value2} />
        <CalculateButtom operation="multiplicação" setResult={setResult} value1={value1} value2={value2} />
        <CalculateButtom operation="divisão" setResult={setResult} value1={value1} value2={value2} />
      </div>
    </div>
  )
}

export default App
