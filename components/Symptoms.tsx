import React from 'react'

import Symptom from './ui/Symptom'

const Symptoms = () => {
  return (
    <div id="symptoms" className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-4xl mb-[20px]">Symptoms of Type 2 Diabetes</h1>
      <div>Symptoms of diabetes tend to develop over time (Cleveland Clinic 2025) :</div>
      <div className="w-[90%]  ">
        <Symptom 
          title="Increased thirst"
        />

        <Symptom 
          title="Peeing more frequently"
        />

        <Symptom 
          title="Feeling hungrier than usual"
        />

        <Symptom 
          title="Fatigue"
        />

        <Symptom 
          title="Slow healing of cuts or sores."
        />

        <Symptom 
          title="Tingling or numbness in your hands or feet"
        />

        <Symptom 
          title="Blurred vision"
        />

        <Symptom 
          title="Dry skin"
        />

        <Symptom 
          title="Unexplained weight loss"
        />
      </div>
    </div>
  )
}

export default Symptoms