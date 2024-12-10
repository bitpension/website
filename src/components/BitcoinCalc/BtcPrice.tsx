import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BtcPrice: React.FC = () => {
  const [btcPrice, setBtcPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
          params: {
            ids: 'bitcoin',
            vs_currencies: 'USD',
          },
        });
        setBtcPrice(response.data.bitcoin.usd);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch Bitcoin price');
        console.error(err);
        setLoading(false);
      }
    };

    fetchBitcoinPrice();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="">
      {btcPrice ? (
        <p className="text-base text-[#B3B0B0]">1 BTC = ${btcPrice.toLocaleString()}</p>
      ) : (
        <p>Unable to fetch the price.</p>
      )}
    </div>
  );
};

export default BtcPrice;