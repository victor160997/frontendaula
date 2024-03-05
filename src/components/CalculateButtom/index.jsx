import React from 'react'

export default function CalculateButtom({operation, value1, value2, setResult}) {
  const getOperationSignal = () => {
    if (operation === "soma") {
      return "+"
    }

    if (operation === "subtração") {
      return "-"
    }

    if (operation === "multiplicação") {
      return "*"
    }

    if (operation === "divisão") {
      return "/"
    }

    return ""
  }

  const finalSetResult = () => {
    if (operation === "soma") {
      setResult(value1 + value2)
    }

    if (operation === "subtração") {
      setResult(value1 - value2)
    }

    if (operation === "multiplicação") {
      setResult(value1 * value2)
    }

    if (operation === "divisão") {
      setResult(value1 / value2)
    }
  }

  const signal = getOperationSignal();

  return (
    <button onClick={() => finalSetResult()}>{signal}</button>
  )
}
