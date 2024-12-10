import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import Image from "next/image";
import BitCoinRate from "../../public/bitcoinrate.svg";

const BitcoinRate = () => {
  const [btcPrice, setBtcPrice] = useState<number | null>(null);
  const [priceChange, setPriceChange] = useState<number | null>(null);

  useEffect(() => {
    // Fetch Bitcoin price
    const fetchBitcoinPrice = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true'
        );
        const price = response.data.bitcoin.usd;
        const change = parseFloat(response.data.bitcoin.usd_24h_change.toFixed(2));

        setBtcPrice(price);
        setPriceChange(change);
      } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
      }
    };

    fetchBitcoinPrice();
  }, []);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={1}
      px={2}
      borderRadius="50px"
      bgcolor="#F4F2F0"
      sx={{
        maxWidth: '100%',
        '@media (max-width: 600px)': {
          bgcolor:'transparent',
          py: 0.5,
          px: 1,
        },
      }}
    >
      <Box mr={2} display="flex" alignItems="center" justifyContent='center'>
        <Image src={BitCoinRate} alt="Bitcoin Logo" width={24} height={24} className="hidden md:block" />
      </Box>
      <Typography variant="body1" fontWeight="bold" sx={{
        maxWidth: '100%',
        '@media (max-width: 600px)': {
          fontSize:"12px",
        },
      }}>
        1BTC/${btcPrice ? btcPrice.toLocaleString('en-US') : 'N/A'} USD
      </Typography>
      <Typography
        variant="body2"
        color={priceChange && priceChange > 0 ? 'green' : 'red'}
        ml={2}
        sx={{
          display: 'inline-block',
          padding: '2px 8px',
          fontWeight: 'bold',
          borderRadius: '4px',
          bgcolor: priceChange && priceChange > 0 ? '#E6FFE6' : '#FFE6E6',
          '@media (max-width: 600px)': {
            ml: 0,
            fontSize:"12px",
          },
        }}
      >
        {priceChange !== null ? `${priceChange > 0 ? `+${priceChange}%` : `${priceChange}%`}` : 'N/A'}
      </Typography>
    </Box>
  );
};

export default BitcoinRate;
