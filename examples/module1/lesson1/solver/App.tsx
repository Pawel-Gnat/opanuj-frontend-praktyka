import React, { useState } from 'react';
import { add, divide, multiply, subtract } from './functions';
import { NumberInput } from './components/number-input';
import { CalcButton } from './components/calc-button';

const App = () => {
  const [firstValue, setfirstValue] = useState<number>(0);
  const [secondValue, setsecondValue] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);

  const doWork = (func: (a: number, b: number) => number) => {
    setResult(func(firstValue, secondValue));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <NumberInput value={firstValue} onChange={setfirstValue} />
        <NumberInput value={secondValue} onChange={setsecondValue} />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <CalcButton operation="+" onClick={() => doWork(add)} />
        <CalcButton operation="-" onClick={() => doWork(subtract)} />
        <CalcButton operation="*" onClick={() => doWork(multiply)} />
        <CalcButton operation="/" onClick={() => doWork(divide)} />
      </div>
      <div>Result: {result}</div>
    </div>
  );
};

export default App;
