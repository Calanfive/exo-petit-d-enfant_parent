
import { useState } from 'react';
import Die from './Die';

function App() {
  const [value, setValue] = useState(Math.floor(Math.random() * 6) + 1);

  const handlerNumberChange = (newValue: number) => {
    setValue(newValue);
};

  return (
    <div>
      <Die onRoll={handlerNumberChange} />
      <p>{value}</p>
    </div>
  )
}

export default App
