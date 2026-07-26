import Image from "next/image";

interface ImagenCEOProps {
  priority?: boolean;
}

export function ImagenCEO({ priority = false }: ImagenCEOProps) {
  return (
    <div className="ceo-foto-wrapper" style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center" }}>
      <Image
        src="/assets/img/ceo.webp"
        alt="Marco A. Colina G., CEO de Mac Consultores Jurídicos & Asociados"
        width={400}
        height={400}
        sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 33vw,
               25vw"
        className="ceo-foto"
        priority={priority}
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
    </div>
  );
}
