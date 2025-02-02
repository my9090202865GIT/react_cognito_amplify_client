import React, { useState } from 'react';

const ProtectedData = ({ jwtToken }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://localhost:5001/api/Books/GetDemoBook', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${jwtToken}`
        }
      });
      if (response.ok) {
        const result = await response.json();
        setData(result);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Protected Data</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default ProtectedData;
