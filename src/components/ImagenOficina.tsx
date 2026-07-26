import Image from "next/image";

interface ImagenOficinaProps {
  src: string;
  alt: string;
  blurDataURL?: string;
  priority?: boolean;
}

export function ImagenOficina({ src, alt, blurDataURL, priority = false }: ImagenOficinaProps) {
  return (
    <div className="imagen-oficina-wrapper" style={{ position: "relative", width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
      <Image
        src={src}
        alt={alt}
        width={1200}  // ancho máximo recomendado en escritorio
        height={670}  // proporción aproximada 16:9
        sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw"
        placeholder={blurDataURL ? "blur" : "empty"}
        blurDataURL={blurDataURL}
        priority={priority}
        className="imagen-oficina"
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
    </div>
  );
}
