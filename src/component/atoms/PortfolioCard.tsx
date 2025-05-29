
import Button from "./Button";

interface PortfolioCardProps {
  image: string; // URL de la imagen del proyecto
  title: string; // Título del proyecto
  description: string; // Descripción breve del proyecto
  onLearnMore: () => void; // Función que se ejecuta al hacer clic en "Saber más"
}

export default function PortfolioCard({
  image,
  title,
  description,
  onLearnMore,
}: PortfolioCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md w-80 min-h-[400px] flex flex-col justify-between flex-shrink-0">
      <div className="h-48 w-full bg-white rounded-t-xl overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="object-contain h-full w-auto"
        />
      </div>{" "}
      <div className="p-4 flex flex-col flex-grow justify-between">
        <h3
          className={`text-lg font-semibold text-gray-800 text-center`}
        >
          {title}
        </h3>
        <p className={`text-sm text-gray-600`}>
          {description}
        </p>

        <div className="mt-4">
          <Button onClick={onLearnMore} children={"Saber más"} />{" "}
        </div>
      </div>
    </div>
  );
}
