import React, { useState, useCallback, useMemo } from 'react';
import Counter from './Counter';

export default function DemoHook() {
  const [showCounter, setShowCounter] = useState(true);
  const [randomNumber, setRandomNumber] = useState(0);

  const renderBigChart = () => {};
  // useCallback: Dùng để cache function
  // []: Không bao giờ tạo lại function mới
  // const renderBigChartMemoized = useCallback(renderBigChart, []);
  // const renderBigChartMemoized = useCallback(() => {}, []);

  const renderBigChartMemoized = useCallback(() => {}, [randomNumber]);

  // useMemo: Tương tự như useCallback nhưng chỉ cache giá trị return từ function thay vì cache cả function
  const student = useMemo(
    () => ({
      fullName: 'Chu Ho Tay',
      clas: 'BC12',
      random: randomNumber,
    }),
    [randomNumber]
  );

  console.log('DemoHook > render');

  return (
    <>
      <h1>DemoHook</h1>
      <p>Random number: {randomNumber}</p>
      <button
        className="btn btn-success"
        onClick={() => setRandomNumber(Math.random())}
      >
        Random Number
      </button>
      <button className="btn btn-danger" onClick={() => setShowCounter(false)}>
        Remove Counter
      </button>
      {showCounter && (
        <Counter
          // renderBigChart={renderBigChartMemoized}
          student={student}
        />
      )}
    </>
  );
}
