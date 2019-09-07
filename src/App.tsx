import React, { useEffect, useReducer } from 'react'
import logo from './logo.svg'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Counter />
    </div>
  )
}

const initialState = { count: 0 }

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(
    () => {
      document.title = `${state.count}`
      return () => {
        document.title = 'hoge'
      }
    },
    [state.count],
  )

  return (
    <>
      <p>You clicked {state.count} times</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  )
}

export default App
