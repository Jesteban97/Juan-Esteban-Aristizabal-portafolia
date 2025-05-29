interface ProgressBarProps {
  label: string;              // Texto que describe la barra de progreso
  percent: number;            // Porcentaje completado (0 - 100)
  className?: string;         // Clases adicionales opcionales
}

export default function ProgressBar({ label, percent, className = '' }: ProgressBarProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between mb-1">
        <span className="text-sm text-[#767676] font-medium">{label}</span>
        <span className="text-sm text-[#767676] font-medium">{percent}%</span>
      </div>
      <div className="w-full border-1 border-[#FFB400] bg-white rounded-full h-1.5 pt-0.5 pb-1 pr-0.5">
        <div
          className="bg-[#FFB400] h-0.5 rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
