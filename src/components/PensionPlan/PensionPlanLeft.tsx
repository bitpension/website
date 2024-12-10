import React from 'react'
import Image from "next/image"
import Map from "../../../public/map.svg"

const PensionPlanLeft = () => {
  return (
    <div>
        <h2 className="text-[#7C7C7C] text-lg italic">Data of Unpaid{" "}
            <span className='underline'>Pension</span>{" "}
            Across Various<br /> African Countries
        </h2>

        <div>
            <Image src={Map} alt="Map of Africa" />
        </div>
    </div>
  )
}

export default PensionPlanLeft