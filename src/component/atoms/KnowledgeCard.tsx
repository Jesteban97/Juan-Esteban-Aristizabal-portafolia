
interface KnowledgeCardProps {
  icon: React.ReactNode; // Ícono
  title: string; // Título 
  description: string; // descripción 
}

export default function KnowledgeCard(
  { icon, title, description }: KnowledgeCardProps,
) {
  return (
    <div className="bg-white shadow rounded-xl p-6 text-center w-full max-w-xs">
      <div
        className={`flex justify-center mb-4 text-4xl text-[#FFB400]`}
      >
        {icon}
      </div>
      <h3
        className={`text-lg font-semibold text-[#2B2B2B]`}
      >
        {title}
      </h3>
      <p
        className={`text-sm text-[#2B2B2B]`}
      >
        {description}
      </p>
    </div>
  );
}
