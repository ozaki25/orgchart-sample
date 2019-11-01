import React, { useEffect, useRef } from 'react';

function Chart() {
  const ref = useRef(null);
  const showChart = () => {
    new window.OrgChart(ref.current, {
      nodeBinding: {
        field_0: 'name',
      },
      nodes: [
        { id: 1, name: 'Amber McKenzie' },
        { id: 2, pid: 1, name: 'Ava Field' },
        { id: 3, pid: 1, name: 'Peter Stevens' },
      ],
    });
  };

  // コンポーネント描画時に一度だけ実行される
  useEffect(() => {
    showChart();
  }, []);
  return <div ref={ref} />;
}

export default Chart;
