import React, { ReactNode } from 'react'

interface SymptomProps {
  title: string;
}

const Symptom: React.FC<SymptomProps> = ({ title }) => {
  return (
    <div className="bg-[lightblue] p-3 rounded-2xl max-w-[250px] text-center mt-[10px]">
        <div className="font-bold text-2xl mb-[3px]">{title}</div>
    </div>
  )
}

export default Symptom