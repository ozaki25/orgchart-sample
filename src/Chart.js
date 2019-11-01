import React, { useEffect, useRef } from 'react';

function Chart({ data }) {
  const ref = useRef(null);
  const showChart = () => {
    new window.OrgChart(ref.current, data);
  };

  // コンポーネント描画時に一度だけ実行される
  useEffect(() => {
    showChart();
  }, []);
  return <div ref={ref} />;
}

export default Chart;
