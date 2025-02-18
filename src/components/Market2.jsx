import React, { useEffect, useState } from 'react';

const StockInfo = () => {
  const [stockInfo, setStockInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStockInfo = async () => {
      const url = 'https://yahoo-finance160.p.rapidapi.com/info';
      const options = {
        method: 'POST',
        headers: {
          'x-rapidapi-key': '59267062efmshfc13f766e90e8b3p1aaeb4jsn6ac4c787d20d',
          'x-rapidapi-host': 'yahoo-finance160.p.rapidapi.com',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ stock: 'MSFT' }),
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parsing as JSON since it's more common for APIs
        setStockInfo(result);
        console.log(result);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch stock information.');
      }
    };

    fetchStockInfo();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {stockInfo ? (
         <div>
         <h2>Microsoft (MSFT) Stock Information</h2>
         <p><strong>Company Name:</strong> {stockInfo.companyName}</p>
         <p><strong>Stock Price:</strong> ${stockInfo.price}</p>
         <p><strong>Market Cap:</strong> ${stockInfo.marketCap}</p>
         <p><strong>52-Week High:</strong> ${stockInfo.dayHigh}</p>
         <p><strong>52-Week Low:</strong> ${stockInfo.dayLow}</p>
       </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StockInfo;
