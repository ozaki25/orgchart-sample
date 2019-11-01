import React, { useEffect } from 'react';

function Chart() {
  const showChart = () => {
    new window.OrgChart(document.getElementById('tree'), {
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
  useEffect(() => {
    showChart();
  }, []);
  return <div />;
}

export default Chart;
