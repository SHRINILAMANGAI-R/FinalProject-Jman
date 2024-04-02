import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const PerformanceDetails = () => {
  const [performanceData, setPerformanceData] = useState([]);

  // Function to handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);
      
      setPerformanceData(jsonData);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <h2>Performance Details</h2>
      <input type="file" onChange={handleFileChange} accept=".xlsx" />
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Performance Score</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {performanceData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.Employee}</td>
              <td>{entry.PerformanceScore}</td>
              {/* Render more data fields as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PerformanceDetails;
