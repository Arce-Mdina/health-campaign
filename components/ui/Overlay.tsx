import { useEffect, useRef, ReactNode } from 'react';

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({ isOpen, onClose, title, children }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center backdrop-blur-sm">
      <div
        ref={overlayRef}
        className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-8 rounded-xl shadow-2xl max-w-2xl w-full text-white animate-fadeIn"
      >
        <h2 className="text-3xl font-bold mb-4">✨ {title}</h2>
        <div className="text-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Overlay;