import EducationCard from "../atoms/EducationCard";


const currentStudies = [
  {
    institution:"Universidad de Antioquia",
    role:"Estudiante",
    dateRange:"Agosto 2019 - actualidad",
    certificateTitle:"Ingeniero de Sistemas",
    description:"Formación integral en ingeniería de sistemas, programación y gestión de proyectos tecnológicos."
  },
  {
    institution: 'SENA',
    role:"Estudiante",
    dateRange: 'Enero 2020 - Junio 2022',
    certificateTitle: 'Tecnológo en Análisis y Desarrollo de Software',
    description: 'Formación técnica en diseño, desarrollo y mantenimiento de sistemas de software.',
  },
  {
    institution: 'Universidad de Antioquia',
    role:"Estudiante",
    dateRange: 'Enero 2014 - Junio 2019',
    certificateTitle: 'Licenciado en Educación Física',
    description: 'Formación integral en pedagogía, didáctica y práctica docente en educación física, deportes y recreación.',
  },
];

export default function EducationSection() {
  return (
    <section className="py-16 bg-[#f0f0f6] ">

      <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">Educación</h2>
      <div className="py-16 bg-gray-50 ">
        {currentStudies.map((item, index) => (
        
          <EducationCard
            key={`${item.institution}-${item.certificateTitle}`}
            institution={item.institution}
            role={item.role}
            dateRange={item.dateRange}
            certificateTitle={item.certificateTitle}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
