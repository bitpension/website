import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Image from "next/image";
import arrowIcon from "../../../public/bitcalcarrow.png";
import BitcoinIcon from "../../../public/logos_bitcoin.svg";
import Attention from "../../../public/Attention.svg";
import BtcPrice from "./BtcPrice";

const BitCalcHero: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [currency, setCurrency] = useState<string>("USD");
  const [bitcoinPrice, setBitcoinPrice] = useState<number | null>(null);
  const [conversion, setConversion] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchBitcoinPrice = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency.toLowerCase()}`
      );
      setBitcoinPrice(response.data.bitcoin[currency.toLowerCase()]);
    } catch (error) {
      console.error("Error fetching the Bitcoin price", error);
    } finally {
      setLoading(false);
    }
  }, [currency]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
  };

  const calculateConversion = useCallback(() => {
    if (bitcoinPrice) {
      setConversion(amount / bitcoinPrice);
    }
  }, [amount, bitcoinPrice]);

  useEffect(() => {
    fetchBitcoinPrice();
  }, [currency, fetchBitcoinPrice]);

  useEffect(() => {
    calculateConversion();
  }, [amount, bitcoinPrice, calculateConversion]);

  return (
    <div className="md:w-[1264px] mx-auto md:p-8 rounded-xl">
      <div className="md:text-center md:w-[500px] mx-auto my-8">
        <h1 className="text-3xl md:text-5xl font-semibold ">
          Bitcoin Price Calculator
        </h1>
        <p className="text-gray-600 my-4">
          Easily track and convert your Bitcoin. Whether you are checking the
          latest exchange rates or planning a deposit, our tool allows you to
          instantly convert Bitcoin into your local currency and vice versa.
        </p>
      </div>

      <main className="px-4 py-12 md:px-[32px] md:py-[30px] bg-[#F8F8FA]">
        <div className="flex md:items-center justify-center flex-col md:flex-row gap-12 md-gap:0">
          <div className="flex md:items-center flex-col md:flex-row gap-8 my-8">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Amount
              </label>
              <input
                type="text"
                value={amount}
                onChange={handleAmountChange}
                className="mt-1 px-2 py-4 w-full rounded-md outline-none border-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Currency
              </label>
              <select
                value={currency}
                onChange={handleCurrencyChange}
                className="mt-1 px-2 py-4 w-full rounded-md outline-none border-none"
              >
                <option value="USD">USD - United States Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
              </select>
            </div>
          </div>

          <div className="block">
            <Image src={arrowIcon} alt="Exchange" width={30} height={30} />
          </div>

          <div>
            {loading ? (
              <div className="text-center text-gray-500 animate-pulse">
                Fetching latest rate...
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {conversion ? conversion.toFixed(8) : "0.00000000"} BTC
                </h2>
                <div className="flex items-center gap-4">
                  <Image src={BitcoinIcon} alt="BitcoinIcon" />
                  <BtcPrice />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-end mt-6">
          <p className="flex items-center gap-2 italic text-sm text-green-600 bg-[#0B7A3808] p-4 rounded-full">
            <span className="mr-2"><Image src={Attention} alt="Attention" /></span> Rates are updated immediately
          </p>
        </div>
      </main>
    </div>
  );
};

export default BitCalcHero;
