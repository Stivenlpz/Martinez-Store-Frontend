import { Mail, Phone, MapPin, Clock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl">Contáctanos</h2>
          <p className="text-muted-foreground text-lg">
            Estamos aquí para ayudarte. Encuentra respuestas a las preguntas más
            frecuentes.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="mb-6 text-2xl">Preguntas Frecuentes</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  ¿Cuál es el tiempo de entrega?
                </AccordionTrigger>
                <AccordionContent>
                  Los pedidos se entregan en un plazo de 3 a 5 días laborables
                  para envíos nacionales. Para envíos internacionales, el tiempo
                  puede variar entre 7 y 14 días laborables.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  ¿Puedo devolver un producto?
                </AccordionTrigger>
                <AccordionContent>
                  Sí, aceptamos devoluciones dentro de los 30 días posteriores a
                  la compra. El producto debe estar sin usar, con las etiquetas
                  originales y en su embalaje original.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  ¿Qué métodos de pago aceptan?
                </AccordionTrigger>
                <AccordionContent>
                  Aceptamos tarjetas de crédito y débito (Visa, Mastercard,
                  American Express), PayPal, transferencia bancaria y pago
                  contra reembolso para pedidos nacionales.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>¿Tienen tienda física?</AccordionTrigger>
                <AccordionContent>
                  Sí, nuestra boutique está ubicada en Calle Principal 123,
                  Madrid. Puedes visitarnos de lunes a sábado de 10:00 a 20:00.
                  Los domingos permanecemos cerrados.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  ¿Cómo puedo conocer mi talla?
                </AccordionTrigger>
                <AccordionContent>
                  Cada producto incluye una guía de tallas detallada. Si tienes
                  dudas, puedes contactarnos por teléfono o email y te
                  ayudaremos a elegir la talla perfecta.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>¿Ofrecen envío gratuito?</AccordionTrigger>
                <AccordionContent>
                  Sí, ofrecemos envío gratuito para pedidos superiores a 50€ en
                  España peninsular. Para otros destinos, consulta las
                  condiciones de envío en el proceso de compra.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl">Información</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted">
                    <Mail className="size-5 text-foreground" />
                  </div>
                  <div>
                    <p className="mb-1 text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:info@martinezboutique.com"
                      className="hover:underline"
                    >
                      info@martinezboutique.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted">
                    <Phone className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="mb-1 text-sm text-muted-foreground">
                      Teléfono
                    </p>
                    <a href="tel:+34600000000" className="hover:underline">
                      +34 600 000 000
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted">
                    <MapPin className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="mb-1 text-sm text-muted-foreground">
                      Dirección
                    </p>
                    <p className="text-pretty">
                      Calle Principal 123
                      <br />
                      28001 Madrid, España
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted">
                    <Clock className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="mb-1 text-sm text-muted-foreground">
                      Horario
                    </p>
                    <p className="text-pretty">
                      Lunes a Sábado: 10:00 - 20:00
                      <br />
                      Domingo: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
