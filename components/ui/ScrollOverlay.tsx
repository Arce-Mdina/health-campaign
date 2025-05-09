import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

interface OverlayProps {
    isOpen2: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    widthClass?: string;
}

const ScrollOverlay: FC<OverlayProps> = ({ 
    isOpen2,
    onClose,
    title,
    children,
    widthClass = "max-w-2xl", 
}) => {
    if (typeof window === "undefined") return null;

    return createPortal(
      <AnimatePresence>
        {isOpen2 && (
          <motion.div
            key="overlay-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm"
            onClick={onClose}
          >
            <motion.div
              key="overlay-modal"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`relative bg-white rounded-2xl shadow-2xl w-full ${widthClass}`}
              style={{ maxHeight: "90vh" }}
              onClick={e => e.stopPropagation()}
            >
              <button
                aria-label="Close overlay"
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                onClick={onClose}
              >
                ✕
              </button>
              {title && (
                <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200 z-10">
                  <h2 className="text-2xl font-semibold">{title}</h2>
                </div>
              )}
              <div
                className="p-6 overflow-y-auto"
                style={{ maxHeight: title ? "calc(90vh - 64px)" : "90vh" }}
              >
                {children}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    );
};

export default ScrollOverlay;

// Usage example (e.g. in a Next.js page):
//
// import { useState } from 'react';
// import Overlay from '@/components/Overlay';
//
// const Page: FC = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <>
//       <button
//         className="px-4 py-2 bg-blue-600 text-white rounded"
//         onClick={() => setOpen(true)}
//       >
//         Open Overlay
//       </button>
//
    //   <Overlay isOpen={open} onClose={() => setOpen(false)} maxWidth="max-w-lg">
    //     <h2 className="text-xl font-bold mb-4">Scrollable Content</h2>
    //     <div className="space-y-4">
    //       {[...Array(20)].map((_, idx) => (
    //         <p key={idx} className="text-gray-700">
    //           Line {idx + 1}: This is some scrollable text inside the overlay. You can keep adding content and it will scroll.
    //         </p>
    //       ))}
    //     </div>
    //   </Overlay>
//     </>
//   );
// };
