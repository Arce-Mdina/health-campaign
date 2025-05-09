'use client'

import { useState } from 'react';

import Overlay from "./ui/Overlay";


const Facts = () => {

  const [showOverlay, setShowOverlay] = useState(false);
  const [showOverlay2, setShowOverlay2] = useState(false);
  const [showOverlay3, setShowOverlay3] = useState(false);

  return (
    <div id="about" className="w-[100%] mt-[10px] p-5 flex flex-col justify-center items-center">

      <h1 className="font-bold text-4xl text-center mb-[20px]">Quick Facts</h1>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <Accordion items={items}/>
        <Accordion items={items}/>
      </div> */}

      <div className="flex justify-center items-center w-[100%] sm:w-[85%] md:w-[75%] gap-[1rem]">
        <button
          onClick={() => setShowOverlay(true)}
          className="mb-6 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
        >
          What is Type 2 Diabetes?
        </button>

        <button
          onClick={() => setShowOverlay2(true)}
          className="mb-6 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
        >
          What happens in the body?
        </button>

        <button
          onClick={() => setShowOverlay3(true)}
          className="mb-6 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
        >
          What is insulin?
        </button>
      </div>

      

      <Overlay 
        isOpen={showOverlay} 
        onClose={() => setShowOverlay(false)} 
        title="Type 2 Diabetes"
        children={
          <div>
            "Type 2 diabetes is a condition that causes the level of 
            glucose (sugar) in the blood to become higher than normal." (HSE)
          </div>
        }
      />

      <Overlay 
        isOpen={showOverlay2} 
        onClose={() => setShowOverlay2(false)} 
        title="What happens in the body"
        children={
          <div>
            When diagnosed with Type 2 diabetes, one's muscle, fat, and liver cells do not respond correctly
            to insulin. As a result, glucose does not get into these cells for energy.
            <div className="italic">(Type 2 Diabetes: MedlinePlus Medical Encyclopedia)</div>
            <br></br>
            When the glucose cannot enter the cells, it stays in the bloodstream, causing
            hyperglycemia. The body tries to get rid of excess glucose through urine, causing
            dehydration. Cells do not get enough glucose for energy, causing tiredness. 
            <div className="italic">(Symptoms, n.d.)</div>
            <br></br>
            The pancreas on the other hand, tries to produce mor insulin to overcome hyperglycemia.
            However, over time, the cells in the pancreas that makes insulin are damaged. Then the body
            does not meet its insulin needs.
            <div className="italic">(Type 2 Diabetes: MedlinePlus Medical Encyclopedia)</div>
          </div>
        }
      />

      <Overlay 
        isOpen={showOverlay3} 
        onClose={() => setShowOverlay3(false)} 
        title="Insulin"
        children={
          <div>
            Insulin is a naturally occuring hormone one's pancreas makes. 
            This hormone is responsible for moving glucose from the blood into cells.
            Insulin lowers the blood sugar levels. Glucagon raises your blood sugar levels.
            One's body uses these two hormones to keep blood sugar level at a healthy range.
            <div className="italic">(Cleveland Clinic 2025)</div>
          </div>
        }
      />

      {/* <div className="bg-gray-200 px-4 py-6 rounded-3xl float-left m-[7px]">
        <h1 className="font-bold text-2xl text-center">What is type 2 diabetes?</h1>
        <div className="text-center text-1xl mt-[10px]">
          Type 2 diabetes is a medical condition that happens
          when one's blood sugar is too high. (HSE “What Is Type 2 Diabetes?”)
        </div>
      </div>

      <div>
        dsfajdlk
      </div> */}

    </div>
  )
}

export default Facts