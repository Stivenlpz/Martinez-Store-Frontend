import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function NewCollection() {
  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4 text-primary-foreground">
              <h2 className="text-4xl md:text-5xl font-bold">
                Nueva Colección
                <br />
                <span className="text-secondary-foregorund">
                  Primavera 2025
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Descubre nuestra más reciente colección inspirada en la
                simplicidad y la elegancia atemporal. Piezas versátiles
                diseñadas para el estilo de vida contemporáneo.
              </p>
            </div>

            <div className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-accent rounded-full mr-3"></span>
                  Materiales sostenibles y de alta calidad
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-accent rounded-full mr-3"></span>
                  Diseños atemporales y versátiles
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-accent rounded-full mr-3"></span>
                  Producción ética y responsable
                </li>
              </ul>
            </div>

            <Button size="lg" variant="secondary" className="w-full" asChild>
              <Link href="/collections">Ver Colección Completa</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              <Image
                src="/images/collection_1.jpg"
                alt="Nueva colección"
                className="w-full aspect-[3/4] object-cover rounded-sm shadow-soft"
                width={600}
                height={600}
              />
            </div>
            <div className="space-y-4 mt-8">
              <Image
                src="/images/collection_2.jpg"
                alt="Nueva colección"
                className="w-full aspect-[3/4] object-cover rounded-sm shadow-soft"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
