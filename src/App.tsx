import { useMemo, useState } from 'react';
import Die from './Die';

function App() {
  const [diceValues, setValues] = useState([1, 5, 4]);

    const sum = useMemo(
      () => {
          return diceValues[0] + diceValues[1] + diceValues[2]
      },
      [diceValues]
    )

    const handlerNumberChange = (pos: number, newValue1: number) => {
        setValues( prev => {
          let newValues = [...prev]
          newValues[pos] = newValue1
          return newValues
        })
    };

  return (
    <div>
      <p>{sum}</p>
      <p>values: [ {diceValues.join(', ')} ]</p>
      {diceValues.map((_, i) => (
        <Die key={i} onRoll={(newVal) => handlerNumberChange(i, newVal)} />
      ))}
      
    </div>
  )
}

export default App