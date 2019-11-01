import React from 'react';
import Chart from './Chart';

function App() {
  return (
    // Chartでスクロールがブロックされるから左右に余白あけた
    <div style={{ margin: '0 30px' }}>
      <p>いろんなところにチャートを出してみる</p>
      <Chart />
      <p>いろんなところにチャートを出してみる</p>
      <Chart />
      <p>いろんなところにチャートを出してみる</p>
      <Chart />
    </div>
  );
}

export default App;
