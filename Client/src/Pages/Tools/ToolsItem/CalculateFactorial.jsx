import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { assets } from '../../../assets/escomData';

const CalculateFactorial = () => {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(assets.clc_md);
        if (!response.ok) {
          throw new Error('Failed to fetch Readme file');
        }
        const result = await response.text();
        setContent(result);  // Set the fetched content to the state
      } catch (err) {
        setError('Error: ' + err.message);  // Handle the error if fetching fails
      }
    };

    fetchData();  // Execute the fetch
  }, []);  // Empty dependency array to only run once when the component mounts

  if (error) {
    return <div>{error}</div>;  // Display the error if it occurred
  }

  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>  // Render the markdown content
    </div>
  );
};

export default CalculateFactorial;
