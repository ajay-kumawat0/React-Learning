import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter === 20) {
      return alert('Counter is already at max value');
    } else {
      setCounter(counter+1);
    }
  }

  const removeValue = () => {
    if(counter === 0) {
      return alert('Counter is already at min value'); 
    } else {
      setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>React App: {counter}</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={addValue}>Increase</button>
      <button onClick={removeValue}>Decrease</button>
    </>
  )
}

export default App;