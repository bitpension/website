import React from "react";
import Image from "next/image";
import { technology } from "../Data/Technology";
import { health } from "../Data/Technology";
import { finance } from "../Data/Technology";
import { auto } from "../Data/Technology";
import { realestate } from "../Data/Technology";
import { crypto } from "../Data/Technology";
import { media } from "../Data/Technology";
import { energy } from "../Data/Technology";
import TechnologyLine from "../../../public/tech_line.svg";
import HealthLine from "../../../public/Healthcare.svg";
import FinanceLine from "../../../public/finance.svg";
import AutoLine from "../../../public/auto.png";
import RealEstateLine from "../../../public/realestate.svg";
import CryptoLine from "../../../public/crypto.svg";
import MediaLine from "../../../public/media.svg";
import EnergyLine from "../../../public/energy.svg";
import TechMob from "../../../public/techMob.png";
import HealthMob from "../../../public/healthMob.png";
import FinanceMob from "../../../public/financeMob.png";

const Holdings_Logos = () => {
  return (
    <main>
      <h2 className="text-[#7C7C7C] text-lg italic my-4">
        Public companies with Bitcoin holdings:
      </h2>
      <section className="flex flex-col gap-9 bg-white rounded-3xl p-8">
        <div>
          <Image
            src={TechnologyLine}
            alt="Tech Line"
            className="hidden md:block"
          />
          <Image src={TechMob} alt="Tech Line" className="md:hidden block" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {technology.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Image src={tech.image}
                  alt={`Logo of ${tech.image}`}
                  width={120}
                  height={80}
                  className="object-contain" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex gap-4">
            <Image
              src={HealthLine}
              alt="Tech Line"
              className="hidden md:block"
            />
            <Image
              src={HealthMob}
              alt="Tech Line"
              className="block md:hidden w-[120px]"
            />
            <Image
              src={FinanceLine}
              alt="Tech Line"
              className="hidden md:block"
            />
            <Image
              src={FinanceMob}
              alt="Tech Line"
              className="md:hidden block w-[120px]"
            />
            <Image src={AutoLine} alt="Tech Line" className="hidden md:flex" />
            <Image
              src={RealEstateLine}
              alt="Tech Line"
              className="hidden md:flex"
            />
          </div>

          <div className="grid grid-cols-2 md:flex gap-4">
            <div className="grid grid-cols-2 gap-4">
              {health.map((health, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center rounded-lg 
            shadow-sm hover:shadow-md transition-shadow"
                >
                  <Image
                    src={health.image}
                    alt={`Logo of ${health.image}`}
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="grid">
              {finance.map((finance, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center rounded-lg 
            shadow-sm hover:shadow-md transition-shadow"
                >
                  <Image
                    src={finance.image}
                    alt={`Logo of ${finance.image}`}
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="grid">
              <Image
                src={AutoLine}
                alt="Tech Line"
                className="flex md:hidden"
              />
              {auto.map((auto, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center rounded-lg 
            shadow-sm hover:shadow-md transition-shadow"
                >
                  <Image
                    src={auto.image}
                    alt={`Logo of ${auto.image}`}
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="grid">
              <Image
                src={RealEstateLine}
                alt="Tech Line"
                className="flex md:hidden"
              />
              {realestate.map((realestate, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center rounded-lg 
            shadow-sm hover:shadow-md transition-shadow"
                >
                  <Image
                    src={realestate.image}
                    alt={`Logo of ${realestate.image}`}
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <Image src={CryptoLine} alt="Tech Line" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {crypto.map((crypto, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-lg 
            shadow-sm hover:shadow-md transition-shadow"
              >
                <Image
                  src={crypto.image}
                  alt={`Logo of ${crypto.image}`}
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex gap-4">
            <Image src={MediaLine} alt="Tech Line" />
            <Image src={EnergyLine} alt="Energy Line" />
          </div>

          <div className="flex gap-4">
            <div className="grid gap-4">
              {media.map((media, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center  rounded-lg 
            shadow-sm hover:shadow-md transition-shadow"
                >
                  <Image
                    src={media.image}
                    alt={`Logo of ${media.image}`}
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="grid">
              {energy.map((energy, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center rounded-lg 
            shadow-sm hover:shadow-md transition-shadow"
                >
                  <Image
                    src={energy.image}
                    alt={`Logo of ${energy.image}`}
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Holdings_Logos;
