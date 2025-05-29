import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function RightSidebar() {
  return (
    <aside className="fixed top-0 right-0 h-full w-16 bg-white flex flex-col items-center justify-center space-y-6 hidden md:flex">
       <div className="rounded-full bg-[#FFB400] w-12 h-12 flex items-center justify-center">
      <a
        href={"www.linkedin.com/in/juan-esteban-aristizabal-aristizabal-41560524b"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-yellow-400 text-xl"
      >
        <FaLinkedin className="text-[#2B2B2B]"/>
      </a>
      </div>
      <div className="rounded-full bg-[#FFB400] w-12 h-12 flex items-center justify-center">
      <a
        href={"https://github.com/Jesteban97"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-yellow-400 text-xl"
      >
        <FaGithub className="text-[#2B2B2B]"/>
      </a>
      </div>
    </aside>
  );
}
