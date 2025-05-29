interface ButtonProps {
  children: React.ReactNode;   // html dentro del botón, puede ser texto o componentes
  onClick: () => void; //funcion opcional que se ejecuta al hacer click en el botón
  type?: "button" | "submit" | "reset";        // Tipo de botón, por defecto es "button"
  className?: string;          // Clase CSS 
}

export default function Button({ children, onClick, type = "button", className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}  
      type={type} // Si no se especifica, por defecto es "button"
      className={`bg-[#FFB400] text-white px-4 py-2 rounded hover:bg-[#ff8800] transition ${className}`}
    >
      {children}  
    </button>
  );
}
