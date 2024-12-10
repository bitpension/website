import React from "react";
import CustodialCard from "./CustodialCard";

const PaymentPlans = () => {
  return (
    <main className="px-4 md:px-0">
      <div className="bg-[#0B7A380D] py-2 px-4 rounded-tr-2xl rounded-tl-2xl md:w-[800px]">
        <h3 className="text-2xl text-[#0B7A38] italic">Our Plans:</h3>
      </div>
      <section className="flex flex-col md:flex-row gap-12 py-12">
        <CustodialCard
          title="CUSTODIAL"
          bgColor="bg-[#F8F8FA]"
          textColor="text-black"
          titleFontSize="text-xl"
          content={[
            { label: "Starting Balance", value: "$1,000" },
            {
              label: "Minimum Deposit",
              value: (
                <ul className="ml-4 list-disc">
                  <li>
                    <span className="text-[#0B7A38]">$100 </span>Individuals
                  </li>
                  <li>
                    <span className="text-[#0B7A38]">$10</span> Per Individual
                    In Company <span className="text-[#0B7A38]">($1000) </span>
                  </li>
                </ul>
              ),
            },
            { label: "Maximum Deposit", value: "$10,000.00" },
            { label: "Interest Rate", value: "0%" },
            {
              label: "Fee",
              value: "Deposit Fee & Yearly Platform Fee & Early Withdrawal Fee",
            },
          ]}
        />
        <CustodialCard
          title="SELF CUSTODY"
          bgColor="bg-[#F4F2F0]"
          textColor="text-black"
          titleFontSize="text-xl"
          content={[
            { label: "Starting Balance", value: "$1,000" },
            {
              label: "Minimum Deposit",
              value: (
                <ul className="ml-4 list-disc">
                  <li>
                    <span className="text-[#0B7A38]">$100 </span>Individuals
                  </li>
                </ul>
              ),
            },
            { label: "Maximum Deposit", value: "$10,000.00" },
            { label: "Interest Rate", value: "0%" },
            {
              label: "Fee",
              value: "Deposit Fee & Yearly Platform Fee & Early Withdrawal Fee",
            },
          ]}
        />
        <CustodialCard
          title="OUR FEES"
          bgColor="bg-[#282828]"
          textColor="text-white"
          titleFontSize="text-xl"
          content={[
            {
              label:
                "We charge $10 for deposits less than $1.000 and we charge 1% for deposits above $1.000",
            },
            {
              label:
                "We charge $10 for early withdrawal up to $100 and 10% for early withdrawals above $100.",
            },
            { label: "1% annual platform fee" },

            {
              label:
                "No withdrawal fee. Third party transaction fees may be applied e.g Bitcoin network fee, bank charges, payment gateway fees, etc.",
            },
          ]}
        />
      </section>
    </main>
  );
};

export default PaymentPlans;
