import Image from 'next/image';

interface AvatarProps {
  src: string;           // ruta de la imagen
  alt: string;           // text img
  size?: number;         // Tamaño opcional de la img
  className?: string;    // Clases CSS
}

export default function Avatar({ src, alt, size = 300, className = '' }: AvatarProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative ${className}`}
    >
      <Image
        src={src}              
        alt={alt}               
        fill                    
        className="object-cover rounded-2xl shadow-xl"  
      />
    </div>
  );
}
