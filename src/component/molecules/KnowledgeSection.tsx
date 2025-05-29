// Importa el componente de tarjeta de conocimiento desde la carpeta de moléculas
import KnowledgeCard from '../atoms/KnowledgeCard';
import { FaCode,FaCloud } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { BsDatabaseFill } from "react-icons/bs";
import { GrTestDesktop } from "react-icons/gr";
import { LuBlocks } from "react-icons/lu";

const knowledgeData = [
  {
    icon: <FaCode  size={40} />,  // Icono + color + tamaño
    title: 'Desarrollo Back-end',
    description: 'Spring Boot, Adonis.js, Express.js, Nest.js, APIs REST, GraphQL, JWT',
  },
  {
    icon: <MdOutlineWeb  size={40} />,
    title: 'Desarrollo front-end',
    description: 'HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, angular',
  },
  {
    icon: <BsDatabaseFill  size={40} />,
    title: 'Bases de datos',
    description: 'PostgreSQL, MySQL, MongoDB, Redis, Firebase',
  },
  {
    icon: <FaCloud size={40} />,
    title: 'Cloud & DevOps',
    description: 'AWS, Azure, GCP, Docker, Kubernetes, CI/CD',
  },
  {
    icon: <GrTestDesktop size={40} />,
    title: 'Testing',
    description: 'JUnit, Mockito, Cypress, Selenium, Postman',
  },
  {
    icon: <LuBlocks size={40} />,
    title: 'Arquitectura',
    description: 'Microservicios, Serverless, Monolitos, Clean Architecture, DDD',
  }
];

// Componente principal que renderiza la sección de conocimientos técnicos
export default function KnowledgeSection() {
  return (
    <section className="py-16 bg-[#f0f0f6] text-center">
      <h2 className="text-3xl font-bold mb-10 text-[#2B2B2B]">Mis Conocimientos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {knowledgeData.map((item) => (
          <KnowledgeCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
