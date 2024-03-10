import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './Navbar';
import { Link } from 'react-router-dom';

export default function Stocks() {
  const [data, setData] = useState({
    top_gainers: [],
    stocks_in_loss: [],
    most_bought: [],
  });

  useEffect(() => {
    const intervalId = setInterval(fetchData, 10000); // Fetch every 10 seconds

    async function fetchData() {
      try {
        const response = await axios.get("https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo");
        setData({
          top_gainers: response.data.top_gainers || [],
          stocks_in_loss: response.data.top_losers || [],
          most_bought: response.data.most_bought || [],
        });
      } catch (err) {
        console.error(err.message);
      }
    }

    fetchData(); // Initial fetch

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div>
      <NavBar />
      <h1>View your stocks here (real-time)</h1>
      {data.top_gainers.map((stock, index) => (
        <div key={index}>
          <i style={{ marginLeft: "20px" }}>{stock.ticker}</i>
          <i style={{ marginLeft: "20px" }}>{stock.price}</i>
          <i style={{ marginLeft: "20px" }}>{stock.change_percentage}</i>
        </div>
      ))}
    </div>
  );
}
