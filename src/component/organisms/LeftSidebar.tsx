
import { TbBoxMultiple } from "react-icons/tb";
import ProgressBar from '../atoms/ProgressBar';

// Componente funcional que representa la barra lateral izquierda
export default function LeftSidebar() {
  return (
    // Etiqueta <aside> que representa una sección secundaria fija a la izquierda, solo visible en pantallas medianas en adelante
    <aside className="fixed top-0 left-0 h-full w-64 bg-white p-6 overflow-y-auto hidden md:block no-scrollbar">
      
      {/* Contenedor superior con imagen de perfil y datos personales */}
      <div className="flex flex-col items-center mb-8">
        {/* Imagen del usuario con estilo redondeado y borde amarillo */}
        <img src="/foto2.png" className="w-30 h-30 rounded-full mb-3 border-2 border-yellow-400" alt="Foto" />
        
        {/* Nombre del usuario centrado y con tipografía destacada */}
        <h2 className="text-lg font-semibold text-black text-center">Juan Esteban Aristizabal</h2>
        
        {/* Descripción corta del usuario en texto gris y centrado */}
        <p className="text-sm text-gray-400 text-center">Full-Stack Developer</p>
      </div>

      {/* Contenedor general de secciones, con espacio vertical entre ellas */}
      <div className="space-y-4">

        {/* Sección de contacto */}
        <div className=' w-full max-w-md mx-auto space-y-2 text-black'>
          <div className='flex justify-between'>
            <span>Edad</span>
            <span>28</span>
          </div>
          <div className='flex justify-between'>
            <span>Residencia</span>
            <span>CO</span>
          </div>
          <div className='flex justify-between'>
            <span>Status</span>
            <span className="text-[#7EB942]">Disponible</span>
          </div>
          <div className='flex justify-between'>
            <span>Dirección</span>
            <span>Medellín</span>
          </div>
        </div>

        {/* Sección de idiomas con barras de progreso */}
        <div className='text-black'>
          <span className='font-semibold'>Idiomas</span>
          <ProgressBar label="Español" percent={100} />
          <ProgressBar label="Inglés" percent={80} />
          <ProgressBar label="Frances" percent={45} />
        </div>

        {/* Sección de lenguajes de programación con barras de progreso */}
        <div className='text-black'>
          <span className='font-semibold'>Lenguajes de programación</span>
          <ProgressBar label="Java" percent={90} />
          <ProgressBar label="JavaScript" percent={90} />
          <ProgressBar label="Python" percent={50} />
          <ProgressBar label="React" percent={90} />
          <ProgressBar label="Angular" percent={60} />
          <ProgressBar label="SQL" percent={90} />
        </div>

        {/* Sección de habilidades adicionales */}
        <div className='flex flex-col space-y-2 text-black'>
          <span className='font-semibold'>Habilidades Extra</span>
        <div className='flex justify-start'>
          <TbBoxMultiple className='mr-2 text-[#FFB400]'/><span>Aws,Azure,GCP</span>
        </div>
        <div className='flex justify-start'>
          <TbBoxMultiple className='mr-2 text-[#FFB400]'/><span>Docker, Kubernetes</span>
        </div>
        <div className='flex justify-start'>
          <TbBoxMultiple className='mr-2 text-[#FFB400]'/><span>postgress</span>
        </div>
          <div className='flex justify-start'><TbBoxMultiple className='mr-2 text-[#FFB400]'/><span>Materialize, prime</span></div>
          <div className='flex justify-start'><TbBoxMultiple className='mr-2 text-[#FFB400]'/><span>Gestión de proyectos</span></div>
          <div className='flex justify-start'><TbBoxMultiple className='mr-2 text-[#FFB400]'/><span>CSS, Sass, Less</span></div>
          <div className='flex justify-start'><TbBoxMultiple className='mr-2 text-[#FFB400]'/><span>Git</span></div>
        </div>

      </div>
    </aside>
  );
}
