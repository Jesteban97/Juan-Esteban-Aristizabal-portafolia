export default function FooterSection() {
  return (
    <footer className="bg-white py-6 mt-10">
      <p
        className={`text-sm text-[#2B2B2B] text-center `}
      >
        &copy; {new Date().getFullYear()}{" "}
        Juan Esteban Aristizabal. Todos los derechos reservados.
      </p>
    </footer>
  );
}
