import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CryptoPrice {
  id: string;
  name: string;
  price: number;
  change24h: number;
}

export default function CryptoTicker() {
  const [prices, setPrices] = useState<CryptoPrice[]>([]);

  useEffect(() => {
    // Simulated crypto price data - In production, replace with real API
    const mockData = [
      { id: 'bitcoin', name: 'Bitcoin', price: 65000, change24h: 2.5 },
      { id: 'ethereum', name: 'Ethereum', price: 3200, change24h: 1.8 },
      // Add more cryptocurrencies...
    ];
    
    setPrices(mockData);
    
    // Simulate price updates
    const interval = setInterval(() => {
      setPrices(current => 
        current.map(crypto => ({
          ...crypto,
          price: crypto.price * (1 + (Math.random() - 0.5) * 0.002),
          change24h: crypto.change24h + (Math.random() - 0.5)
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black/20 backdrop-blur-sm py-2 overflow-hidden">
      <div className="flex space-x-8 crypto-slide">
        {prices.map((crypto) => (
          <motion.div
            key={crypto.id}
            className="flex items-center space-x-2 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="font-bold">{crypto.name}</span>
            <span>${crypto.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
            <span className={crypto.change24h >= 0 ? 'text-green-400' : 'text-red-400'}>
              {crypto.change24h > 0 ? '+' : ''}{crypto.change24h.toFixed(2)}%
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}