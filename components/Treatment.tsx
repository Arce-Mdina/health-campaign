import React from 'react'

const Treatment = () => {
  return (
    <div className="w-[full] sm:px-10 md:px-20 sm:w-[90%] md:w-[80%] lg:w-[70%] text-left text-[20px]">
      <h1 className="font-bold text-3xl mb-[10px]">How can I prevent type 2 diabetes (Cleveland Clinic 2025)</h1>
      <div className="text-[20px]">Certain strategies can help lower your risk of developing Type 2 diabetes or delay its onset, including:</div>
      <br></br>
      <ul className="list-disc marker:text-blue-500 marker:pl-rem24px">
        <li>Do not smoke</li>
        <li>Eating nutritious food</li>
        <li>Excersing regularly</li>
        <li>Maintaining a weight that’s healthy for you.</li>
      </ul>
      <br></br>
      <div className="text-[20px]">Unfornatuely some people have such strong genetic risk factors
        that these lifestyle changes will not be enough to prevent T2D
      </div>
    </div>
  )
}

export default Treatment