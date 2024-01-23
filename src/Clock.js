import React, { useState, useEffect } from 'react';
import './Clock.css';

function App() {
  // 시간과 관련된 코드 S
  const nowTime = () => {
    let now = new Date();
    let hour = String(now.getHours()).padStart(2, "0"); // 수정됨
    let minute = String(now.getMinutes()).padStart(2, "0"); // 수정됨
    let second = String(now.getSeconds()).padStart(2, "0"); // 수정됨

    return `${hour} : ${minute} : ${second}`;
  };

  const [clock, setClock] = useState(nowTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock(nowTime);
    }, 1000);

    // 컴포넌트가 언마운트될 때 clearInterval로 인터벌 제거
    return () => clearInterval(intervalId);
  }, []); // 두 번째 매개변수로 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 useEffect가 실행되도록 함
  // 시간과 관련된 코드 E

  return (
    <div className="App">
      <h1>{clock}</h1>
    </div>
  );
}

export default App;