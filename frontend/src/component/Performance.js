import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import "./styles/nav.css"
import { useNavigate } from 'react-router-dom';

const Performance = () => {
  const navigate =  useNavigate();
  const chartRef = useRef(null);
  const myChart = useRef(null); 

  useEffect(() => {
    const createOrUpdateChart = () => {
      const ctx = chartRef.current.getContext('2d');

      if (myChart.current) {
        myChart.current.destroy();
      }

      myChart.current = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['UI/UX', 'Node', 'React', 'Testing', 'DBT', 'Data Engineering', 'Data Warehouse', 'PBI'],
          datasets: [{
            label: 'Marks Scored',
            data: [90, 85, 80, 75, 85, 70, 65, 90],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(100, 200, 50, 0.6)',
              'rgba(200, 100, 150, 0.6)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true
        }
      });
    };

    createOrUpdateChart();

    return () => {
      if (myChart.current) {
        myChart.current.destroy();
      }
    };
  }, []);

  return (
    <div>
    <nav>
    <ul>
      <li><button onClick={() => navigate("/profile")}>Profile</button></li>
      <li><button onClick={() => navigate("/Performance")}>Performance</button></li>
      <li><button onClick={() => navigate("/Assessment")}>Assessments</button></li>
      <li><button onClick={() => navigate("/")}>Logout</button></li>
    </ul>
  </nav>
  
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div style={{ width: '400px', height: '150x' }}>
    <h2>Marks Scored in Courses</h2>
    <canvas ref={chartRef}></canvas>
    </div>
  </div>
  </div>
  );
  
  
};

export default Performance;
