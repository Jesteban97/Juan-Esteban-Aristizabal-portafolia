"use client";

import { useState } from 'react';
import Button from '../atoms/Button';
import Avatar from '../atoms/Avatar';
import Modal from '../atoms/Modal';


export default function ProfileSection() {

 const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null,
  );
  const [modalTitle, setModalTitle] = useState<string>("");

  const openModal = (title: string, content: React.ReactNode) => {
    setModalTitle(title);
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
    setModalTitle("");
  };

  return (
    
    <section className="bg-white p-8 rounded-2xl shadow-lg mb-10 flex flex-col lg:flex-row items-center lg:items-start gap-8">

      
      <div className="flex-1 text-center lg:text-left">

        <h1 className={`text-3xl font-bold text-gray-900`}>
          Soy <span className="text-[#2B2B2B]">Juan Esteban Aristizabal</span>{' '}
          <span className="text-[#FFB400]">Full-Stack</span><span className="text-[#2B2B2B]"> Developer</span>
        </h1>

       
        <p className="mt-4 text-gray-700 text-base leading-relaxed max-w-2xl">
          Soy un apasionado del desarrollo de software con más de 3 años de experiencia en la
          creación de aplicaciones web y móviles.
          He trabajado en proyectos que van desde sistemas de gestión empresarial hasta aplicaciones
          geograficas, siempre buscando soluciones eficientes y escalables.
          Mi enfoque se centra en la arquitectura limpia, la automatización de procesos y el desarrollo
          de aplicaciones utilizando utilizando diferentes stacks de tecnologías.
        </p>

        <Button onClick={() =>
                openModal("Curriculum Vitae de Juan Esteban Aristizabal",  <iframe src="/HV.pdf" width="100%" height="600px" title="Hoja de Vida de Juan Esteban Aristizabal"></iframe>)} className="mt-6">
          VER MÁS
        </Button>
      </div>

 
      <div className="w-[300px] h-[300px] relative lg:ml-6 shrink-0">
  
        <Avatar
          src="/foto_1.jpg"
          alt="Juan Esteban Aristizabal"
          className="rounded-2xl object-cover w-full h-full shadow-md"
        />
      </div>

       {modalContent && (
              <Modal title={modalTitle} content={modalContent} onClose={closeModal} />
            )}
    </section>
  );
}
