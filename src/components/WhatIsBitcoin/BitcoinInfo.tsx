"use client"
import React, { useState } from 'react';

interface Content {
  title: string;
  description: string;
  keyPoints: string[];
}

const contentData: { [key: string]: Content } = {
  "What is Bitcoin": {
    title: "What Is Bitcoin",
    description: "Bitcoin (BTC) is a cryptocurrency (a virtual currency) designed to act as money and a form of payment outside the control of any one person, group, or entity. This removes the need for trusted third-party involvement (e.g., a mint or bank) in financial transactions. Bitcoin was introduced to the public in 2009 by an anonymous developer or group of developers using the name Satoshi Nakamoto. It has since become the most well-known and largest cryptocurrency in the world. Its popularity has inspired the development of many other cryptocurrencies. Read on to learn more about the cryptocurrency that started it all—the history behind it, how to buy it, mine it, and what it can be used for",
    keyPoints: [
      "Bitcoin is the end product of the work of many people, but it is generally accepted that Satoshi Nakamoto created it and introduced it in 2008.",
      "Bitcoin is the public blockchain used to create and manage the cryptocurrency of the same name.",
      "Bitcoin mining is the race between miners to hash specific values and other block information to find the solution to a hashing problem and add a block to the blockchain. The winning miner is rewarded with bitcoins.",
      "Bitcoin can be used by speculators, investors for investing purposes, and consumers for purchases or value exchange.",
      "There are many risks involved with investing in and using bitcoins, including volatility, fraud, and theft.",
    ],
  },
  "Why Bitcoin Only": {
    title: "Why Bitcoin Only",
    description: "Bitcoin's unique properties have led many to see it as a safer investment compared to other cryptocurrencies. Here’s why Bitcoin stands out.",
    keyPoints: [
      "Bitcoin's scarcity makes it a store of value.",
      "It is decentralized and transparent, reducing the need for middlemen.",
      "Bitcoin has the highest level of security among cryptocurrencies.",
      "Global adoption rates continue to grow.",
    ],
  },
  "How Bitcoin Works": {
    title: "How Bitcoin Works",
    description: "Bitcoin operates on a decentralized public ledger called blockchain. Here’s a brief overview of how transactions are secured and verified.",
    keyPoints: [
      "Transactions are added to blocks after verification by miners.",
      "Each block is linked to the previous one, forming a blockchain.",
      "Miners solve complex algorithms to secure each transaction.",
      "Rewards are distributed for verifying blocks, incentivizing miners.",
    ],
  },
  "A History Of Business Bitcoin Adoption": {
    title: "A History Of Business Bitcoin Adoption",
    description: "Businesses have gradually adopted Bitcoin, leading to increased mainstream acceptance. Here’s an overview of this journey.",
    keyPoints: [
      "Early adopters included tech-savvy startups.",
      "Mainstream companies like Tesla have embraced Bitcoin.",
      "Payment platforms such as PayPal now support Bitcoin transactions.",
      "Growing demand has led to regulatory focus worldwide.",
    ],
  },
};

const BitcoinInfo: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>("What is Bitcoin");

  const content = contentData[selectedSection];

  return (
    <div className="flex my-14 md:mx-12">
      {/* Sidebar Navigation */}
      <aside className="md:w-[317px] p-4 hidden md:block">
        <ul className="space-y-4 border-l border-[#D7D7D7] ">
          {Object.keys(contentData).map((section) => (
            <li
              key={section}
              className={`cursor-pointer px-8 leading-10 ${
                selectedSection === section ? "text-[#0B7A38] bg-[#0b7a3714] border-l-2 border-[#0B7A38] font-semibold" : "text-[#7C7C7C]"
              }`}
              onClick={() => setSelectedSection(section)}
            >
              {section}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-[724px] md:p-8">
        <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
        <p className="text-[#7C7C7C] text-lg my-8 leading-10">{content.description}</p>

        {/* Key Points Section */}
        <h2 className="text-[#0B7A38] font-semibold mb-4">Key Points:</h2>
        <ul className="list-disc list-inside text-[#7C7C7C] text-lg space-y-2 mb-8 md:pl-8 leading-10">
          {content.keyPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default BitcoinInfo;
