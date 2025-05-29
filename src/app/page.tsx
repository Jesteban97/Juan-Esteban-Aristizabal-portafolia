// Importa los componentes de tipo organismo que constituyen las secciones principales de la página

import LeftSidebar from '@/component/organisms/LeftSidebar';
import RightSidebar from '@/component/molecules/RightSidebar';
import MainSection from '@/component/organisms/MainSection';

// Componente funcional principal que representa la página de inicio
export default function Home() {
  return (
    <>
      {/* sidebar izquierdo */}
      <LeftSidebar />
      
      {/* sidebar derecho */}
      <RightSidebar />
      
      <main className="md:ml-64 md:mr-16 p-6">
         <MainSection/>
      </main>
     
    </>
  );
}
