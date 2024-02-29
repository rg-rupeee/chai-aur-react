import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  let url = `https://api.exchangerate-api.com/v4/latest/${currency}`;

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => setData(res.rates));
  }, [url, currency]);

  return data;
}

export default useCurrencyInfo;
