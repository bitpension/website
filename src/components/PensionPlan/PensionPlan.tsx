import React from 'react'
import PensionPlanLeft from "./PensionPlanLeft"
import PensionPlanRight from "./PensionPlanRight"

const PensionPlan = () => {
  return (
    <div className="flex items-center justify-around flex-col-reverse md:flex-row gap-8 md:gap-0 py-20 px-4 md:px-0">
        <PensionPlanLeft />
        <PensionPlanRight />
    </div>
  )
}

export default PensionPlan