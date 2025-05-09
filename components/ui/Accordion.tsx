'use client'

import React, { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="w-full flex justify-between items-center py-3 text-base font-medium text-gray-900 focus:outline-none hover:text-gray-700 transition-colors"
      >
        <span>{title}</span>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 8l4 4 4-4" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="py-2 text-gray-600 text-sm">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
  items: { title: string; content: ReactNode }[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => (
  <div className="flex flex-col space-y-2">
    {items.map((item, idx) => (
      <AccordionItem key={idx} title={item.title}>
        {item.content}
      </AccordionItem>
    ))}
  </div>
);

export default Accordion;

// Usage example with two responsive columns:
//
// import Accordion from '@/components/Accordion';
//
// const group1 = [
//   { title: 'Question 1', content: <p>Answer to question 1.</p> },
//   { title: 'Question 2', content: <p>Answer to question 2.</p> },
// ];
// const group2 = [
//   { title: 'Question 3', content: <p>Answer to question 3.</p> },
//   { title: 'Question 4', content: <p>Answer to question 4.</p> },
// ];
//
// const Page = () => (
//   <div className="p-6 bg-gray-50 min-h-screen">
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
//       <div><Accordion items={group1} /></div>
//       <div><Accordion items={group2} /></div>
//     </div>
//   </div>
// );
