import { useState, useEffect } from 'react'

const StockData = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=EUR&apikey=LEG23JK9Z3S80FIZ'

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'User-Agent': 'request', // This header is typically not needed in client-side requests.
          },
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()
        // console.log("API Response:", result);

        // const extractedData = extractCurrencyData(result);
        // console.log(extractedData);

        setData(result);
      } catch (error) {
        console.error('Error fetchind data: ', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>Stock Data</h1>
      {error && <p>Error: {error}</p>}
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre> // Format JSON for readability
      ) : (
        <p>Loading...</p>
      )}
      {/* <table border="1">
        <thead>
          <tr>
            <th>From Currency Code</th>
            <th>From Currency Name</th>
            <th>To Currency Code</th>
            <th>To Currency Name</th>
            <th>Exchange Rate</th>
            <th>Last Refreshed</th>
            <th>Time Zone</th>
            <th>Bid Price</th>
            <th>Ask Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.fromCurrencyCode}</td>
            <td>{data.fromCurrencyName}</td>
            <td>{data.toCurrencyCode}</td>
            <td>{data.toCurrencyName}</td>
            <td>{data.exchangeRate}</td>
            <td>{data.lastRefreshed}</td>
            <td>{data.timeZone}</td>
            <td>{data.bidPrice}</td>
            <td>{data.askPrice}</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  )
}

// const extractCurrencyData = data => {
//   const exchangeRateData = data['Realtime Currency Exchange Rate']

//   const fromCurrencyCode = exchangeRateData['1. From_Currency Code']
//   const fromCurrencyName = exchangeRateData['2. From_Currency Name']
//   const toCurrencyCode = exchangeRateData['3. To_Currency Code']
//   const toCurrencyName = exchangeRateData['4. To_Currency Name']
//   const exchangeRate = exchangeRateData['5. Exchange Rate']
//   const lastRefreshed = exchangeRateData['6. Last Refreshed']
//   const timeZone = exchangeRateData['7. Time Zone']
//   const bidPrice = exchangeRateData['8. Bid Price']
//   const askPrice = exchangeRateData['9. Ask Price']

//   return {
//     fromCurrencyCode,
//     fromCurrencyName,
//     toCurrencyCode,
//     toCurrencyName,
//     exchangeRate,
//     lastRefreshed,
//     timeZone,
//     bidPrice,
//     askPrice,
//   }
// }

export default StockData;
