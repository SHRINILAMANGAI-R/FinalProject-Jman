// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';

// const PerformanceDetails = () => {
//   const [performanceData, setPerformanceData] = useState([]);

//   // Function to handle file input change
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
    
//     reader.onload = (e) => {
//       const data = new Uint8Array(e.target.result);
//       const workbook = XLSX.read(data, { type: 'array' });
//       const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
//       const sheet = workbook.Sheets[sheetName];
//       const jsonData = XLSX.utils.sheet_to_json(sheet);
      
//       setPerformanceData(jsonData);
//     };

//     reader.readAsArrayBuffer(file);
//   };

//   return (
//     <div>
//       <h2>Performance Details</h2>
//       <input type="file" onChange={handleFileChange} accept=".xlsx" />
//       <table>
//         <thead>
//           <tr>
//             <th>Employee</th>
//             <th>Performance Score</th>
//             {/* Add more table headers as needed */}
//           </tr>
//         </thead>
//         <tbody>
//           {performanceData.map((entry, index) => (
//             <tr key={index}>
//               <td>{entry.Employee}</td>
//               <td>{entry.PerformanceScore}</td>
//               {/* Render more data fields as needed */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PerformanceDetails;


// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';

// const PerformanceDetails = () => {
//   const [performanceData, setPerformanceData] = useState([]);

//   // Function to handle file input change
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
    
//     reader.onload = (e) => {
//       const data = new Uint8Array(e.target.result);
//       const workbook = XLSX.read(data, { type: 'array' });
//       const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
//       const sheet = workbook.Sheets[sheetName];
//       const jsonData = XLSX.utils.sheet_to_json(sheet);
      
//       setPerformanceData(jsonData);
//     };

//     reader.readAsArrayBuffer(file);
//   };

//   return (
//     <div>
//       <h2>Performance Details</h2>
//       <input type="file" onChange={handleFileChange} accept=".xlsx" />
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Role</th>
//             <th>UI/UX</th>
//             <th>Node</th>
//             <th>React</th>
//             <th>Testing</th>
//             <th>DBT</th>
//             <th>Data Engineering</th>
//             <th>Data Warehouse</th>
//             <th>PBI</th>
//             <th>Percentage</th>
//             <th>Remark</th>
//             {/* Add more table headers as needed */}
//           </tr>
//         </thead>
//         <tbody>
//           {performanceData.map((entry, index) => (
//             <tr key={index}>
//               <td>{entry.ID}</td>
//               <td>{entry.Name}</td>
//               <td>{entry.Role}</td>
//               <td>{entry["UI/UX"]}</td>
//               <td>{entry.Node}</td>
//               <td>{entry.React}</td>
//               <td>{entry.Testing}</td>
//               <td>{entry.DBT}</td>
//               <td>{entry["Data Engineering"]}</td>
//               <td>{entry["Data Warehouse"]}</td>
//               <td>{entry.PBI}</td>
//               <td>{entry.Percentage}</td>
//               <td>{entry.Remark}</td>
//               {/* Render more data fields as needed */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PerformanceDetails;


// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';

// const PerformanceDetails = () => {
//   const [performanceData, setPerformanceData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   // Function to handle file input change
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
    
//     reader.onload = (e) => {
//       const data = new Uint8Array(e.target.result);
//       const workbook = XLSX.read(data, { type: 'array' });
//       const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
//       const sheet = workbook.Sheets[sheetName];
//       const jsonData = XLSX.utils.sheet_to_json(sheet);
      
//       setPerformanceData(jsonData);
//     };

//     reader.readAsArrayBuffer(file);
//   };

//   // Function to handle search input change
//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Filter performanceData based on search query
//   const filteredData = performanceData.filter((entry) => {
//     return Object.values(entry).some((value) =>
//       String(value).toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   });

//   return (
//     <div>
//       <h2>Performance Details</h2>
//       <input type="file" onChange={handleFileChange} accept=".xlsx" />
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchQuery}
//         onChange={handleSearchChange}
//       />
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Role</th>
//             <th>UI/UX</th>
//             <th>Node</th>
//             <th>React</th>
//             <th>Testing</th>
//             <th>DBT</th>
//             <th>Data Engineering</th>
//             <th>Data Warehouse</th>
//             <th>PBI</th>
//             <th>Percentage</th>
//             <th>Remark</th>
//             {/* Add more table headers as needed */}
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((entry, index) => (
//             <tr key={index}>
//               <td>{entry.ID}</td>
//               <td>{entry.Name}</td>
//               <td>{entry.Role}</td>
//               <td>{entry["UI/UX"]}</td>
//               <td>{entry.Node}</td>
//               <td>{entry.React}</td>
//               <td>{entry.Testing}</td>
//               <td>{entry.DBT}</td>
//               <td>{entry["Data Engineering"]}</td>
//               <td>{entry["Data Warehouse"]}</td>
//               <td>{entry.PBI}</td>
//               <td>{entry.Percentage}</td>
//               <td>{entry.Remark}</td>
//               {/* Render more data fields as needed */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PerformanceDetails;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import './styles/PerformanceDetails.css';
import "./styles/nav.css";

const PerformanceDetails = () => {
  const navigate = useNavigate();
  const [performanceData, setPerformanceData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

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

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle sorting
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Sort performanceData based on sortConfig
  let sortedData = [...performanceData];
  if (sortConfig.key) {
    sortedData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }

  // Filter sortedData based on search query
  const filteredData = sortedData.filter((entry) => {
    return Object.values(entry).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div>
    <nav className="navbar">
      <ul>
        <li><button onClick={() => navigate("/AdminHome")}>Home</button></li>
        <li><button onClick={() => navigate("/createuser")}>Create User</button></li>
        <li><button onClick={() => navigate("/profile")}>Profile</button></li>
        <li><button onClick={() => navigate("/PerformanceDetails")}>Performance</button></li>
        <li><button onClick={() => navigate("/User")}>Users</button></li>
        <li><button onClick={() => navigate("/")}>Logout</button></li>
      </ul>
    </nav>
    <div className="table-container">
      <h2>Performance Details</h2>
      <div className="table-controls">
        <input type="file" onChange={handleFileChange} accept=".xlsx" />
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div>
          Sort by:
          <button onClick={() => requestSort('ID')}>ID</button>
          <button onClick={() => requestSort('Name')}>Name</button>
          <button onClick={() => requestSort('Role')}>Role</button>
          <button onClick={() => requestSort('UI/UX')}>UI/UX</button>
          <button onClick={() => requestSort('Node')}>Node</button>
          <button onClick={() => requestSort('React')}>React</button>
          <button onClick={() => requestSort('Testing')}>Testing</button>
          <button onClick={() => requestSort('DBT')}>DBT</button>
          <button onClick={() => requestSort('Data Engineering')}>Data Engineering</button>
          <button onClick={() => requestSort('Data Warehouse')}>Data Warehouse</button>
          <button onClick={() => requestSort('PBI')}>PBI</button>
          <button onClick={() => requestSort('Percentage')}>Percentage</button>
          <button onClick={() => requestSort('Remark')}>Remark</button>
          {/* Add more buttons for other columns as needed */}
        </div>
      </div>
      <table className="styled-table" style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>UI/UX</th>
            <th>Node</th>
            <th>React</th>
            <th>Testing</th>
            <th>DBT</th>
            <th>Data Engineering</th>
            <th>Data Warehouse</th>
            <th>PBI</th>
            <th>Percentage</th>
            <th>Remark</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.ID}</td>
              <td>{entry.Name}</td>
              <td>{entry.Role}</td>
              <td>{entry["UI/UX"]}</td>
              <td>{entry.Node}</td>
              <td>{entry.React}</td>
              <td>{entry.Testing}</td>
              <td>{entry.DBT}</td>
              <td>{entry["Data Engineering"]}</td>
              <td>{entry["Data Warehouse"]}</td>
              <td>{entry.PBI}</td>
              <td>{entry.Percentage}</td>
              <td>{entry.Remark}</td>
              {/* Render more data fields as needed */}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default PerformanceDetails;
