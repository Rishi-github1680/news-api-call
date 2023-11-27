// fetch_queries.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for API calls

const DeleteApiComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make an API call when component mounts
    axios.get('API_ENDPOINT_FOR_UPDATE')
      .then(response => {
        // Handle the API response, set data to state
        setData(response.data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {/* Display data obtained from the API */}
      <h2>delete_query API Data:</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteApiComponent;
