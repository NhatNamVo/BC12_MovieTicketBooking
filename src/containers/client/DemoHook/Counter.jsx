import React, { useState, useEffect, memo } from 'react';

function Counter() {
  // useState trả về mảng 2 phần tử
  // Phần tử đầu tiên là giá trị của state đang quản lý
  // Phần tử thứ hai tương đương với hàm setState bên class (để cập nhật state)
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  //   const [state, setState] = useState({
  //     count: 0,
  //     loading: false,
  //     listMovie: [],
  //   });

  //   setState(prevState => ({
  //     ...prevState,
  //     loading: true,
  //   }))

  // componentDidMount + componentDidUpdate
  useEffect(() => {
    console.log('Chạy lần đầu và tất cả nhũng lần component re-render');
  });

  // componentDidMount
  // []: mảng dependencies
  useEffect(() => {
    console.log('Chỉ chạy một lần duy nhất');

    // componentWillUnmount
    return () => {
      console.log('Chỉ chạy khi component mất khỏi DOM');
    };
  }, []);

  useEffect(() => {
    console.log(
      'Chạy lần đầu và chỉ chạy lại khi giá trị của biến trong mảng dependency thay đổi'
    );
  }, [count, loading]);

  console.log('Counter > render');

  return (
    <>
      <h1>Counter</h1>
      <p>Current number is {count}</p>
      <button className="btn btn-success" onClick={() => setCount(count + 1)}>
        +
      </button>
    </>
  );
}

export default memo(Counter);
// memo: HOC
// Sử dụng kỹ thuật memoization
// Giống PureComponent của class
