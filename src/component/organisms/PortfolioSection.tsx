"use client";
import { useState } from "react";
import PortfolioCard from "../atoms/PortfolioCard";
import Modal from "../atoms/Modal";

// Datos del portafolio
const portfolioData = [
  {
    title: "Sistema geografico",
    image: "/mapgis.png",
    description: "Aplicación de consulta geográfica",
    details: (
      <div className="space-y-2 text-gray-700 text-sm leading-relaxed">
        <p>
          Aplicación de consulta geográfica que permite a los usuarios buscar y
          visualizar información geográfica de manera interactiva.
        </p>
        <a
          href="https://www.medellin.gov.co/mapgis/mapa.jsp?aplicacion=0"
          target="_blank"
          className="text-blue-500 underline"
        >
          Visitar sitio web
        </a>
      </div>
    ),
  },
  {
    title: "Aurora",
    image: "/aurora.png",
    description: "ERP especializado para entidad pública.",
    details: (
      <div className="space-y-2 text-gray-700 text-sm leading-relaxed">
        <p>
          Desarrollo de un ERP especializado para una entidad pública, que
          integra módulos de gestión administrativa, financiera y de recursos
          humanos.
        </p>
      </div>
    ),
  },
  {
    title: "App de reportes",
    image: "/reportes.png",
    description: "App de reportes de baches y otros problemas urbanos.",
    details: (
      <div className="space-y-2 text-gray-700 text-sm leading-relaxed">
        <p>
          Aplicación móvil para la recolección de reportes ciudadanos sobre
          baches y otros problemas urbanos, facilitando la comunicación entre la
          comunidad y las autoridades locales.
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=co.com.hyg.HuecosMed&hl=es"
          target="_blank"
          className="text-blue-500 underline"
        >
          Visitar sitio web
        </a>
      </div>
    ),
  },
  {
    title: "sitio web de gestion de citas",
    image: "/inmed.png",
    description: "pagina web de gestión de citas médicas con especialistas.",
    details: (
      <div className="space-y-2 text-gray-700 text-sm leading-relaxed">
        <p>
          Desarrollo de un sitio web para la gestión de citas médicas,
          permitiendo a los usuarios reservar citas con especialistas de manera
          fácil y rápida.
        </p>
        <a
          href="https://inmed.co/"
          target="_blank"
          className="text-blue-500 underline"
        >
          Visitar sitio web
        </a>
      </div>
    ),
  },
];

export default function PortfolioSection() {
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
    <section className="py-16 bg-gray-100 no-scrollbar">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
        Portafolio
      </h2>

      <div className="overflow-x-auto flex gap-6 px-6 snap-x">
        {portfolioData.map((project, index) => (
          <div key={index} className="snap-center flex-shrink-0">
            <PortfolioCard
              image={project.image}
              title={project.title}
              description={project.description}
              onLearnMore={() =>
                openModal(project.title, project.details)}
            />
          </div>
        ))}
      </div>
      {modalContent && (
        <Modal title={modalTitle} content={modalContent} onClose={closeModal} />
      )}
    </section>
  );
}
