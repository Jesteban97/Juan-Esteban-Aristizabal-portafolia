// atoms/Modal.tsx
'use client';
import { useEffect } from 'react';

interface ModalProps {
  title: string;
  content: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ title, content, onClose }: ModalProps) {
  // Cierra el modal al presionar la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose} // <- Esto cierra el modal al hacer clic fuera
    >
      <div
        className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative"
        onClick={(e) => e.stopPropagation()} // <- Esto evita que un clic dentro del modal lo cierre
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
        <div>{content}</div>
      </div>
    </div>
  );
}
