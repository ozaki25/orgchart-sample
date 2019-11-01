import React from 'react';
import Chart from './Chart';

const data1 = {
  nodeBinding: {
    field_0: 'name',
  },
  nodes: [
    { id: 1, name: 'Amber McKenzie' },
    { id: 2, pid: 1, name: 'Ava Field' },
    { id: 3, pid: 1, name: 'Peter Stevens' },
  ],
};

function App() {
  return (
    // Chartでスクロールがブロックされるから左右に余白あけた
    <div style={{ margin: '0 30px' }}>
      <p>いろんなところにチャートを出してみる</p>
      <Chart data={data1} />
    </div>
  );
}

export default App;
