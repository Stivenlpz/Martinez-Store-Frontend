"use client";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  FileText,
  CreditCard,
  Lock,
  Package,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";

const sections = [
  { id: "privacidad", label: "Política de Privacidad", icon: ShieldCheck },
  { id: "terminos", label: "Términos y Condiciones", icon: FileText },
  { id: "compra", label: "Política de Compra", icon: CreditCard },
  { id: "seguridad", label: "Seguridad de Datos", icon: Lock },
  { id: "envios", label: "Envíos y Entregas", icon: Package },
  { id: "devoluciones", label: "Devoluciones y Reembolsos", icon: RefreshCw },
];

export default function LegalPage() {
  return (
    <div className="my-8">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          {/* Sidebar Navigation */}
          <aside className="lg:sticky lg:top-8 h-fit">
            <nav className="space-y-1">
              <h2 className="text-sm font-medium text-muted-foreground mb-4 px-3">
                Información Legal
              </h2>
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    className="w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-md transition-colors text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="text-left">{section.label}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="max-w-3xl">
            <div className="space-y-2 mb-12">
              <h1 className="text-4xl lg:text-5xl font-serif tracking-tight text-balance">
                Políticas y Términos Legales
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Última actualización: 14 de octubre de 2025
              </p>
            </div>

            <div className="space-y-16">
              {/* Política de Privacidad */}
              <section id="privacidad" className="scroll-mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="h-6 w-6" />
                  <h2 className="text-3xl font-serif tracking-tight">
                    Política de Privacidad
                  </h2>
                </div>

                <div className="prose prose-neutral max-w-none space-y-6 text-foreground/90 leading-relaxed">
                  <p>
                    En Martinez Boutique Store, nos comprometemos a proteger su
                    privacidad y garantizar la seguridad de su información
                    personal. Esta política describe cómo recopilamos, usamos y
                    protegemos sus datos.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    1. Información que Recopilamos
                  </h3>
                  <p>
                    Recopilamos información que usted nos proporciona
                    directamente cuando:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Crea una cuenta en nuestro sitio web</li>
                    <li>
                      Realiza una compra o solicita información sobre nuestros
                      productos
                    </li>
                    <li>Se suscribe a nuestro boletín informativo</li>
                    <li>Participa en encuestas, promociones o concursos</li>
                    <li>
                      Se comunica con nuestro servicio de atención al cliente
                    </li>
                  </ul>

                  <p className="mt-4">
                    La información recopilada puede incluir: nombre completo,
                    dirección de correo electrónico, dirección postal, número de
                    teléfono, información de pago, historial de compras,
                    preferencias de productos y cualquier otra información que
                    decida proporcionarnos.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    2. Uso de la Información
                  </h3>
                  <p>
                    Utilizamos la información recopilada para los siguientes
                    propósitos:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Procesar y completar sus pedidos, incluyendo el envío y la
                      facturación
                    </li>
                    <li>
                      Gestionar su cuenta y proporcionarle servicio al cliente
                    </li>
                    <li>
                      Enviarle confirmaciones de pedidos, actualizaciones de
                      envío y comunicaciones relacionadas
                    </li>
                    <li>
                      Personalizar su experiencia de compra y mostrarle
                      contenido relevante
                    </li>
                    <li>
                      Enviarle información sobre nuevos productos, ofertas
                      especiales y promociones (con su consentimiento)
                    </li>
                    <li>
                      Mejorar nuestros productos, servicios y operaciones
                      comerciales
                    </li>
                    <li>
                      Prevenir fraudes y garantizar la seguridad de nuestro
                      sitio web
                    </li>
                    <li>Cumplir con obligaciones legales y regulatorias</li>
                  </ul>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    3. Compartir Información
                  </h3>
                  <p>
                    No vendemos ni alquilamos su información personal a
                    terceros. Podemos compartir su información únicamente en las
                    siguientes circunstancias:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Proveedores de servicios:</strong> Compartimos
                      información con empresas que nos ayudan a operar nuestro
                      negocio, como procesadores de pagos, servicios de envío,
                      plataformas de marketing por correo electrónico y
                      proveedores de alojamiento web.
                    </li>
                    <li>
                      <strong>Cumplimiento legal:</strong> Podemos divulgar
                      información cuando sea necesario para cumplir con la ley,
                      regulaciones, procesos legales o solicitudes
                      gubernamentales.
                    </li>
                    <li>
                      <strong>Protección de derechos:</strong> Podemos compartir
                      información para proteger nuestros derechos, propiedad o
                      seguridad, así como los de nuestros clientes y el público.
                    </li>
                    <li>
                      <strong>Transacciones comerciales:</strong> En caso de
                      fusión, adquisición o venta de activos, su información
                      puede transferirse como parte de esa transacción.
                    </li>
                  </ul>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    4. Cookies y Tecnologías Similares
                  </h3>
                  <p>
                    Utilizamos cookies y tecnologías similares para mejorar su
                    experiencia en nuestro sitio web. Las cookies son pequeños
                    archivos de texto que se almacenan en su dispositivo y nos
                    permiten:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Recordar sus preferencias y configuraciones</li>
                    <li>Mantener su sesión iniciada</li>
                    <li>
                      Analizar el tráfico del sitio web y comprender cómo los
                      usuarios interactúan con nuestro contenido
                    </li>
                    <li>
                      Mostrar anuncios personalizados basados en sus intereses
                    </li>
                  </ul>
                  <p className="mt-4">
                    Puede configurar su navegador para rechazar cookies, pero
                    esto puede afectar la funcionalidad de nuestro sitio web.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    5. Sus Derechos
                  </h3>
                  <p>
                    Usted tiene los siguientes derechos con respecto a su
                    información personal:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Acceso:</strong> Puede solicitar una copia de la
                      información personal que tenemos sobre usted.
                    </li>
                    <li>
                      <strong>Rectificación:</strong> Puede solicitar que
                      corrijamos información inexacta o incompleta.
                    </li>
                    <li>
                      <strong>Eliminación:</strong> Puede solicitar que
                      eliminemos su información personal, sujeto a ciertas
                      excepciones legales.
                    </li>
                    <li>
                      <strong>Oposición:</strong> Puede oponerse al
                      procesamiento de su información para ciertos fines, como
                      marketing directo.
                    </li>
                    <li>
                      <strong>Portabilidad:</strong> Puede solicitar que
                      transfiramos su información a otra organización.
                    </li>
                    <li>
                      <strong>Retirar consentimiento:</strong> Puede retirar su
                      consentimiento para el procesamiento de datos en cualquier
                      momento.
                    </li>
                  </ul>
                  <p className="mt-4">
                    Para ejercer estos derechos, contáctenos a través de
                    privacidad@martinezboutique.com
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    6. Seguridad de Datos
                  </h3>
                  <p>
                    Implementamos medidas de seguridad técnicas y organizativas
                    apropiadas para proteger su información personal contra
                    acceso no autorizado, alteración, divulgación o destrucción.
                    Sin embargo, ningún método de transmisión por Internet o
                    almacenamiento electrónico es 100% seguro.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    7. Retención de Datos
                  </h3>
                  <p>
                    Conservamos su información personal durante el tiempo
                    necesario para cumplir con los propósitos descritos en esta
                    política, a menos que la ley requiera o permita un período
                    de retención más largo. Los criterios para determinar
                    nuestros períodos de retención incluyen requisitos legales,
                    contables y de informes.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Términos y Condiciones */}
              <section id="terminos" className="scroll-mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="h-6 w-6" />
                  <h2 className="text-3xl font-serif tracking-tight">
                    Términos y Condiciones
                  </h2>
                </div>

                <div className="prose prose-neutral max-w-none space-y-6 text-foreground/90 leading-relaxed">
                  <p>
                    Bienvenido a Martinez Boutique Store. Al acceder y utilizar
                    nuestro sitio web, usted acepta cumplir con estos términos y
                    condiciones. Por favor, léalos cuidadosamente antes de
                    realizar cualquier compra.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    1. Aceptación de Términos
                  </h3>
                  <p>
                    Al utilizar nuestro sitio web y servicios, usted confirma
                    que tiene al menos 18 años de edad o que cuenta con el
                    consentimiento de un padre o tutor legal. Si no está de
                    acuerdo con estos términos, no debe utilizar nuestro sitio
                    web.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    2. Uso del Sitio Web
                  </h3>
                  <p>
                    Usted se compromete a utilizar nuestro sitio web únicamente
                    para fines legales y de manera que no infrinja los derechos
                    de terceros ni restrinja o inhiba el uso y disfrute del
                    sitio por parte de otros. Está prohibido:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Utilizar el sitio de manera fraudulenta o en relación con
                      actividades delictivas
                    </li>
                    <li>
                      Intentar obtener acceso no autorizado a nuestros sistemas
                      o redes
                    </li>
                    <li>
                      Transmitir virus, malware o cualquier código malicioso
                    </li>
                    <li>
                      Recopilar información de otros usuarios sin su
                      consentimiento
                    </li>
                    <li>
                      Reproducir, duplicar o copiar contenido del sitio sin
                      autorización expresa
                    </li>
                    <li>
                      Realizar ingeniería inversa o intentar extraer el código
                      fuente de nuestro sitio
                    </li>
                  </ul>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    3. Cuentas de Usuario
                  </h3>
                  <p>
                    Para realizar compras y acceder a ciertas funciones, debe
                    crear una cuenta. Usted es responsable de:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Mantener la confidencialidad de su contraseña y
                      credenciales de cuenta
                    </li>
                    <li>Todas las actividades que ocurran bajo su cuenta</li>
                    <li>
                      Notificarnos inmediatamente sobre cualquier uso no
                      autorizado de su cuenta
                    </li>
                    <li>
                      Proporcionar información precisa, actual y completa
                      durante el registro
                    </li>
                    <li>
                      Actualizar su información para mantenerla precisa y
                      completa
                    </li>
                  </ul>
                  <p className="mt-4">
                    Nos reservamos el derecho de suspender o cancelar cuentas
                    que violen estos términos o que se utilicen para actividades
                    fraudulentas o ilegales.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    4. Propiedad Intelectual
                  </h3>
                  <p>
                    Todo el contenido de nuestro sitio web, incluyendo pero no
                    limitado a textos, gráficos, logotipos, imágenes, videos,
                    diseños, compilaciones de datos y software, es propiedad de
                    Martinez Boutique Store o de nuestros proveedores de
                    contenido y está protegido por leyes de propiedad
                    intelectual internacionales.
                  </p>
                  <p className="mt-4">
                    Las marcas comerciales, marcas de servicio y logotipos
                    utilizados en nuestro sitio son propiedad de Martinez
                    Boutique Store o de terceros. No está permitido utilizar
                    estas marcas sin nuestro consentimiento previo por escrito.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    5. Precios y Disponibilidad
                  </h3>
                  <p>
                    Todos los precios están expresados en la moneda local y
                    están sujetos a cambios sin previo aviso. Hacemos todo lo
                    posible por garantizar que los precios mostrados sean
                    precisos, pero pueden ocurrir errores. Si descubrimos un
                    error en el precio de un producto que ha pedido, le
                    informaremos lo antes posible y le daremos la opción de
                    confirmar su pedido al precio correcto o cancelarlo.
                  </p>
                  <p className="mt-4">
                    La disponibilidad de productos está sujeta a cambios. Nos
                    reservamos el derecho de limitar las cantidades de productos
                    que ofrecemos y de descontinuar cualquier producto en
                    cualquier momento.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    6. Limitación de Responsabilidad
                  </h3>
                  <p>
                    En la medida máxima permitida por la ley, Martinez Boutique
                    Store no será responsable por daños indirectos,
                    incidentales, especiales, consecuentes o punitivos,
                    incluyendo pero no limitado a pérdida de beneficios, datos,
                    uso, buena voluntad u otras pérdidas intangibles,
                    resultantes de:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Su acceso o uso (o incapacidad de acceso o uso) de nuestro
                      sitio web
                    </li>
                    <li>
                      Cualquier conducta o contenido de terceros en el sitio
                    </li>
                    <li>Cualquier contenido obtenido del sitio</li>
                    <li>
                      Acceso no autorizado, uso o alteración de sus
                      transmisiones o contenido
                    </li>
                  </ul>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    7. Modificaciones
                  </h3>
                  <p>
                    Nos reservamos el derecho de modificar estos términos y
                    condiciones en cualquier momento. Los cambios entrarán en
                    vigor inmediatamente después de su publicación en el sitio
                    web. Su uso continuado del sitio después de cualquier cambio
                    constituye su aceptación de los nuevos términos.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    8. Ley Aplicable
                  </h3>
                  <p>
                    Estos términos se regirán e interpretarán de acuerdo con las
                    leyes del país donde opera Martinez Boutique Store, sin dar
                    efecto a ningún principio de conflictos de leyes. Cualquier
                    disputa relacionada con estos términos estará sujeta a la
                    jurisdicción exclusiva de los tribunales competentes.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Política de Compra */}
              <section id="compra" className="scroll-mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard className="h-6 w-6" />
                  <h2 className="text-3xl font-serif tracking-tight">
                    Política de Compra
                  </h2>
                </div>

                <div className="prose prose-neutral max-w-none space-y-6 text-foreground/90 leading-relaxed">
                  <p>
                    En Martinez Boutique Store, nos esforzamos por hacer que su
                    experiencia de compra sea lo más sencilla y segura posible.
                    Esta política describe el proceso de compra y nuestros
                    compromisos con usted.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    1. Proceso de Pedido
                  </h3>
                  <p>Para realizar un pedido en nuestro sitio web:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Seleccione los productos que desea comprar y agréguelos a
                      su carrito
                    </li>
                    <li>
                      Revise su carrito y proceda al pago cuando esté listo
                    </li>
                    <li>Proporcione su información de envío y facturación</li>
                    <li>Seleccione su método de pago preferido</li>
                    <li>Revise su pedido y confirme la compra</li>
                  </ul>
                  <p className="mt-4">
                    Una vez completado el pedido, recibirá un correo electrónico
                    de confirmación con los detalles de su compra y un número de
                    pedido único. Este correo no constituye la aceptación de su
                    pedido, sino simplemente una confirmación de que lo hemos
                    recibido.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    2. Aceptación del Pedido
                  </h3>
                  <p>
                    Nos reservamos el derecho de aceptar o rechazar cualquier
                    pedido por cualquier motivo, incluyendo pero no limitado a:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Disponibilidad limitada de productos</li>
                    <li>Errores en la descripción o precio del producto</li>
                    <li>
                      Problemas identificados por nuestro departamento de
                      prevención de fraude
                    </li>
                    <li>Restricciones geográficas o de envío</li>
                  </ul>
                  <p className="mt-4">
                    Si su pedido es rechazado después de que se haya procesado
                    el pago, se le reembolsará el monto total dentro de 5-10
                    días hábiles.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    3. Métodos de Pago
                  </h3>
                  <p>Aceptamos los siguientes métodos de pago:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Tarjetas de crédito (Visa, Mastercard, American Express)
                    </li>
                    <li>Tarjetas de débito</li>
                    <li>PayPal</li>
                    <li>
                      Transferencia bancaria (para pedidos superiores a cierto
                      monto)
                    </li>
                    <li>
                      Pago contra entrega (disponible en áreas seleccionadas)
                    </li>
                  </ul>
                  <p className="mt-4">
                    Todos los pagos se procesan de forma segura a través de
                    nuestros proveedores de servicios de pago certificados. No
                    almacenamos información completa de tarjetas de crédito en
                    nuestros servidores.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    4. Facturación
                  </h3>
                  <p>
                    Su tarjeta de crédito o cuenta será cargada en el momento en
                    que se confirme su pedido. Recibirá una factura electrónica
                    por correo electrónico que incluirá:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Detalles completos de los productos comprados</li>
                    <li>Precios individuales y total</li>
                    <li>Costos de envío aplicables</li>
                    <li>Impuestos correspondientes</li>
                    <li>Información de pago y método utilizado</li>
                  </ul>
                  <p className="mt-4">
                    Si necesita una factura física o con requisitos fiscales
                    específicos, contáctenos dentro de las 48 horas posteriores
                    a su compra.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    5. Impuestos
                  </h3>
                  <p>
                    Los precios mostrados en nuestro sitio web pueden o no
                    incluir impuestos, dependiendo de su ubicación. Los
                    impuestos aplicables se calcularán y mostrarán durante el
                    proceso de pago antes de que confirme su pedido. Somos
                    responsables de recaudar y remitir los impuestos sobre las
                    ventas según lo requiera la ley.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    6. Promociones y Descuentos
                  </h3>
                  <p>
                    Ocasionalmente ofrecemos promociones, códigos de descuento y
                    ofertas especiales. Estas promociones:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Están sujetas a términos y condiciones específicos que se
                      comunicarán claramente
                    </li>
                    <li>
                      No pueden combinarse con otras ofertas a menos que se
                      indique lo contrario
                    </li>
                    <li>
                      Tienen fechas de vencimiento y no pueden aplicarse
                      retroactivamente
                    </li>
                    <li>
                      Pueden tener restricciones de productos o categorías
                    </li>
                    <li>
                      Están sujetas a disponibilidad y pueden cancelarse en
                      cualquier momento
                    </li>
                  </ul>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    7. Cancelación de Pedidos
                  </h3>
                  <p>
                    Puede cancelar su pedido sin cargo dentro de las 2 horas
                    posteriores a la confirmación del pedido, siempre que el
                    pedido no haya sido procesado para envío. Para cancelar un
                    pedido, contáctenos inmediatamente a través de:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Correo electrónico: martinezboutique@gmail.com</li>
                    <li>Teléfono: +57 310 8756795</li>
                    <li>Chat en vivo en nuestro sitio web</li>
                  </ul>
                  <p className="mt-4">
                    Si su pedido ya ha sido enviado, deberá seguir nuestro
                    proceso de devolución estándar una vez que reciba los
                    productos.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    8. Garantía de Satisfacción
                  </h3>
                  <p>
                    Estamos comprometidos con su satisfacción. Si no está
                    completamente satisfecho con su compra, ofrecemos una
                    garantía de devolución de 30 días para la mayoría de los
                    productos. Los artículos deben estar sin usar, con etiquetas
                    originales y en su empaque original.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Seguridad de Datos */}
              <section id="seguridad" className="scroll-mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="h-6 w-6" />
                  <h2 className="text-3xl font-serif tracking-tight">
                    Seguridad de Datos
                  </h2>
                </div>

                <div className="prose prose-neutral max-w-none space-y-6 text-foreground/90 leading-relaxed">
                  <p>
                    La seguridad de su información personal es una prioridad
                    absoluta para Martinez Boutique Store. Implementamos
                    múltiples capas de protección para garantizar que sus datos
                    estén seguros en todo momento.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    1. Cifrado de Datos
                  </h3>
                  <p>
                    Utilizamos tecnología de cifrado SSL (Secure Socket Layer)
                    de 256 bits para proteger toda la información sensible
                    transmitida entre su navegador y nuestros servidores. Esto
                    incluye:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Información de tarjetas de crédito y débito</li>
                    <li>
                      Credenciales de inicio de sesión (nombre de usuario y
                      contraseña)
                    </li>
                    <li>Información personal identificable</li>
                    <li>Direcciones de envío y facturación</li>
                    <li>Historial de compras y preferencias</li>
                  </ul>
                  <p className="mt-4">
                    Puede verificar que está en una conexión segura buscando el
                    icono de candado en la barra de direcciones de su navegador
                    y confirmando que la URL comienza con &quot;https://&quot;.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    2. Procesamiento de Pagos
                  </h3>
                  <p>
                    No almacenamos información completa de tarjetas de crédito
                    en nuestros servidores. Todos los pagos se procesan a través
                    de proveedores de servicios de pago certificados PCI DSS
                    (Payment Card Industry Data Security Standard) que cumplen
                    con los más altos estándares de seguridad de la industria.
                  </p>
                  <p className="mt-4">
                    Nuestros procesadores de pago utilizan tokenización, lo que
                    significa que su información de pago se convierte en un
                    código único que no puede ser utilizado por terceros incluso
                    si fuera interceptado.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    3. Autenticación de Usuario
                  </h3>
                  <p>
                    Para proteger su cuenta, implementamos las siguientes
                    medidas de seguridad:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Contraseñas seguras:</strong> Requerimos
                      contraseñas que cumplan con estándares mínimos de
                      complejidad (mínimo 8 caracteres, combinación de letras,
                      números y símbolos)
                    </li>
                    <li>
                      <strong>Autenticación de dos factores (2FA):</strong>{" "}
                      Opción disponible para agregar una capa adicional de
                      seguridad a su cuenta
                    </li>
                    <li>
                      <strong>Detección de actividad sospechosa:</strong>{" "}
                      Monitoreamos intentos de inicio de sesión inusuales y
                      bloqueamos automáticamente actividades sospechosas
                    </li>
                    <li>
                      <strong>Cierre de sesión automático:</strong> Las sesiones
                      inactivas se cierran automáticamente después de un período
                      de tiempo
                    </li>
                    <li>
                      <strong>Notificaciones de seguridad:</strong> Le alertamos
                      sobre cambios importantes en su cuenta, como cambios de
                      contraseña o direcciones de envío
                    </li>
                  </ul>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    4. Protección de Infraestructura
                  </h3>
                  <p>
                    Nuestros servidores y bases de datos están protegidos
                    mediante:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Firewalls de última generación que filtran el tráfico
                      malicioso
                    </li>
                    <li>
                      Sistemas de detección y prevención de intrusiones
                      (IDS/IPS)
                    </li>
                    <li>
                      Monitoreo de seguridad 24/7 por parte de nuestro equipo de
                      TI
                    </li>
                    <li>
                      Copias de seguridad regulares y cifradas de todos los
                      datos
                    </li>
                    <li>
                      Centros de datos certificados con controles de acceso
                      físico estrictos
                    </li>
                    <li>
                      Actualizaciones y parches de seguridad aplicados
                      regularmente
                    </li>
                  </ul>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    5. Prevención de Fraude
                  </h3>
                  <p>
                    Utilizamos sistemas avanzados de detección de fraude que
                    analizan cada transacción en busca de patrones sospechosos.
                    Estos sistemas evalúan múltiples factores, incluyendo:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Ubicación geográfica de la transacción</li>
                    <li>Historial de compras del cliente</li>
                    <li>Velocidad y frecuencia de las transacciones</li>
                    <li>Coincidencia entre dirección de facturación y envío</li>
                    <li>Comportamiento de navegación en el sitio</li>
                  </ul>
                  <p className="mt-4">
                    Si se detecta actividad sospechosa, podemos solicitar
                    verificación adicional antes de procesar el pedido. Esto
                    puede incluir contactarlo por teléfono o correo electrónico
                    para confirmar la transacción.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    6. Privacidad de Datos
                  </h3>
                  <p>
                    Cumplimos con todas las regulaciones de protección de datos
                    aplicables, incluyendo GDPR (Reglamento General de
                    Protección de Datos) y leyes locales de privacidad. Esto
                    significa que:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Solo recopilamos datos necesarios para proporcionar
                      nuestros servicios
                    </li>
                    <li>
                      No compartimos sus datos con terceros sin su
                      consentimiento explícito
                    </li>
                    <li>
                      Usted tiene derecho a acceder, corregir o eliminar sus
                      datos en cualquier momento
                    </li>
                    <li>
                      Implementamos políticas de retención de datos y eliminamos
                      información obsoleta
                    </li>
                    <li>
                      Nuestro personal está capacitado en prácticas de
                      protección de datos
                    </li>
                  </ul>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    7. Seguridad del Correo Electrónico
                  </h3>
                  <p>
                    Tenga en cuenta que el correo electrónico no es un medio de
                    comunicación completamente seguro. Nunca le solicitaremos
                    información sensible como contraseñas o números completos de
                    tarjetas de crédito por correo electrónico. Si recibe un
                    correo sospechoso que parece provenir de Martinez Boutique
                    Store:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      No haga clic en enlaces ni descargue archivos adjuntos
                    </li>
                    <li>No proporcione información personal o financiera</li>
                    <li>Verifique la dirección del remitente cuidadosamente</li>
                    <li>
                      Contáctenos directamente a través de nuestro sitio web
                      oficial
                    </li>
                    <li>
                      Reenvíe el correo sospechoso a martinezboutique@gmail.com
                    </li>
                  </ul>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    8. Responsabilidad del Usuario
                  </h3>
                  <p>
                    Si bien implementamos medidas de seguridad robustas, la
                    seguridad también depende de sus acciones. Le recomendamos:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Utilizar contraseñas únicas y complejas para su cuenta
                    </li>
                    <li>
                      No compartir sus credenciales de inicio de sesión con
                      nadie
                    </li>
                    <li>
                      Cerrar sesión después de usar dispositivos compartidos o
                      públicos
                    </li>
                    <li>Mantener su software antivirus actualizado</li>
                    <li>
                      Evitar acceder a su cuenta desde redes Wi-Fi públicas no
                      seguras
                    </li>
                    <li>
                      Revisar regularmente su actividad de cuenta en busca de
                      transacciones no autorizadas
                    </li>
                    <li>
                      Notificarnos inmediatamente si sospecha que su cuenta ha
                      sido comprometida
                    </li>
                  </ul>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    9. Respuesta a Incidentes
                  </h3>
                  <p>
                    En el improbable caso de una violación de seguridad que
                    afecte sus datos personales, nos comprometemos a:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Notificarle dentro de las 72 horas posteriores al
                      descubrimiento
                    </li>
                    <li>
                      Proporcionar detalles sobre qué información fue afectada
                    </li>
                    <li>
                      Explicar las medidas que estamos tomando para remediar la
                      situación
                    </li>
                    <li>
                      Ofrecer asistencia y recursos para proteger su información
                    </li>
                    <li>Cooperar plenamente con las autoridades reguladoras</li>
                  </ul>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    10. Contacto de Seguridad
                  </h3>
                  <p>
                    Si tiene preguntas o inquietudes sobre la seguridad de sus
                    datos, o si desea reportar un problema de seguridad,
                    contáctenos en:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Correo electrónico: martinezboutique@gmail.com</li>
                    <li>Teléfono: +57 310 8756795 (línea de seguridad 24/7)</li>
                  </ul>
                </div>
              </section>

              <Separator />

              {/* Envíos y Entregas */}
              <section id="envios" className="scroll-mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="h-6 w-6" />
                  <h2 className="text-3xl font-serif tracking-tight">
                    Envíos y Entregas
                  </h2>
                </div>

                <div className="prose prose-neutral max-w-none space-y-6 text-foreground/90 leading-relaxed">
                  <p>
                    En Martinez Boutique Store, nos esforzamos por entregar sus
                    productos de manera rápida y segura. Esta sección detalla
                    nuestras políticas de envío, tiempos de entrega y opciones
                    disponibles.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    1. Áreas de Envío
                  </h3>
                  <p>
                    Actualmente realizamos envíos a las siguientes ubicaciones:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Nacional:</strong> Enviamos a todas las provincias
                      y ciudades del país
                    </li>
                    <li>
                      <strong>Internacional:</strong> Ofrecemos envíos
                      internacionales a países seleccionados en América Latina,
                      América del Norte y Europa
                    </li>
                    <li>
                      <strong>Zonas remotas:</strong> Algunas áreas remotas
                      pueden tener restricciones o costos adicionales
                    </li>
                  </ul>
                  <p className="mt-4">
                    Durante el proceso de pago, puede verificar si realizamos
                    envíos a su dirección ingresando su código postal. Si su
                    ubicación no está disponible actualmente, contáctenos para
                    explorar opciones alternativas.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    2. Opciones de Envío
                  </h3>
                  <p>Ofrecemos las siguientes opciones de envío:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Envío Estándar (5-7 días hábiles):</strong> Opción
                      económica para entregas regulares
                    </li>
                    <li>
                      <strong>Envío Express (2-3 días hábiles):</strong> Entrega
                      acelerada para cuando necesita sus productos rápidamente
                    </li>
                    <li>
                      <strong>Envío Premium (1-2 días hábiles):</strong> Nuestra
                      opción más rápida, disponible en áreas metropolitanas
                    </li>
                    <li>
                      <strong>Recogida en tienda:</strong> Disponible en
                      ubicaciones seleccionadas, sin costo adicional
                    </li>
                    <li>
                      <strong>Envío internacional (10-20 días hábiles):</strong>{" "}
                      Varía según el destino
                    </li>
                  </ul>
                  <p className="mt-4">
                    Los tiempos de entrega son estimados y comienzan a contar
                    desde el momento en que su pedido es procesado y enviado, no
                    desde el momento de la compra. Los pedidos realizados
                    durante fines de semana o días festivos se procesarán el
                    siguiente día hábil.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    3. Costos de Envío
                  </h3>
                  <p>Los costos de envío se calculan en función de:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Peso y dimensiones del paquete</li>
                    <li>Destino de envío</li>
                    <li>Método de envío seleccionado</li>
                    <li>Valor total del pedido</li>
                  </ul>
                  <p className="mt-4">
                    <strong>Envío gratuito:</strong> Ofrecemos envío estándar
                    gratuito en pedidos superiores a $XX.XXX. Esta promoción
                    aplica solo para envíos nacionales y está sujeta a
                    disponibilidad.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    4. Procesamiento de Pedidos
                  </h3>
                  <p>Una vez que realiza su pedido:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Confirmación:</strong> Recibirá un correo
                      electrónico de confirmación inmediatamente
                    </li>
                    <li>
                      <strong>Procesamiento:</strong> Su pedido será procesado
                      dentro de 1-2 días hábiles
                    </li>
                    <li>
                      <strong>Preparación:</strong> Los productos serán
                      cuidadosamente empaquetados y preparados para envío
                    </li>
                    <li>
                      <strong>Envío:</strong> Recibirá un correo con el número
                      de seguimiento cuando su pedido sea enviado
                    </li>
                    <li>
                      <strong>Entrega:</strong> Podrá rastrear su paquete hasta
                      que llegue a su destino
                    </li>
                  </ul>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    5. Seguimiento de Pedidos
                  </h3>
                  <p>Una vez que su pedido sea enviado, recibirá:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Un número de seguimiento único</li>
                    <li>
                      Un enlace directo para rastrear su paquete en tiempo real
                    </li>
                    <li>
                      Actualizaciones por correo electrónico sobre el estado de
                      su envío
                    </li>
                    <li>
                      Notificación cuando su paquete esté en camino para entrega
                    </li>
                  </ul>
                  <p className="mt-4">
                    También puede rastrear su pedido iniciando sesión en su
                    cuenta en nuestro sitio web y visitando la sección &quot;Mis
                    Pedidos&quot;.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    6. Recepción de Pedidos
                  </h3>
                  <p>Al recibir su pedido:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Inspeccione el paquete en presencia del mensajero si es
                      posible
                    </li>
                    <li>
                      Verifique que el paquete no esté dañado externamente
                    </li>
                    <li>
                      Confirme que todos los artículos pedidos estén incluidos
                    </li>
                    <li>
                      Revise que los productos estén en perfectas condiciones
                    </li>
                    <li>
                      Reporte cualquier problema dentro de las 48 horas
                      posteriores a la entrega
                    </li>
                  </ul>
                  <p className="mt-4">
                    Si no está disponible para recibir el paquete, el servicio
                    de mensajería dejará un aviso con instrucciones para
                    reprogramar la entrega o recoger el paquete en una ubicación
                    cercana.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    7. Problemas con la Entrega
                  </h3>
                  <p>Si experimenta problemas con su entrega:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Paquete perdido:</strong> Si su paquete no llega
                      dentro del tiempo estimado, contáctenos para iniciar una
                      investigación
                    </li>
                    <li>
                      <strong>Paquete dañado:</strong> Tome fotos del daño y
                      contáctenos inmediatamente para un reemplazo o reembolso
                    </li>
                    <li>
                      <strong>Dirección incorrecta:</strong> Si proporcionó una
                      dirección incorrecta, podemos intentar redirigir el
                      paquete (pueden aplicarse cargos adicionales)
                    </li>
                    <li>
                      <strong>Entrega fallida:</strong> Si el servicio de
                      mensajería no puede entregar su paquete después de
                      múltiples intentos, el paquete será devuelto a nuestro
                      almacén
                    </li>
                  </ul>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    8. Envíos Internacionales
                  </h3>
                  <p>Para envíos internacionales, tenga en cuenta:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Los tiempos de entrega pueden variar debido a procesos
                      aduaneros
                    </li>
                    <li>
                      Pueden aplicarse aranceles, impuestos y tasas aduaneras
                      adicionales (responsabilidad del destinatario)
                    </li>
                    <li>
                      Algunos productos pueden tener restricciones de
                      importación en ciertos países
                    </li>
                    <li>
                      Los paquetes pueden ser inspeccionados por las autoridades
                      aduaneras
                    </li>
                    <li>
                      No somos responsables por retrasos causados por procesos
                      aduaneros
                    </li>
                  </ul>

                  <h3 className="text-xl font-medium mt-8 mb-4">9. Empaque</h3>
                  <p>
                    Todos nuestros productos son cuidadosamente empaquetados
                    para garantizar que lleguen en perfectas condiciones.
                    Utilizamos:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cajas resistentes y de alta calidad</li>
                    <li>
                      Material de relleno ecológico para proteger los productos
                    </li>
                    <li>Bolsas selladas para prendas delicadas</li>
                    <li>
                      Empaque de marca elegante para una experiencia premium
                    </li>
                    <li>
                      Materiales reciclables y sostenibles siempre que sea
                      posible
                    </li>
                  </ul>
                </div>
              </section>

              <Separator />

              {/* Devoluciones y Reembolsos */}
              <section id="devoluciones" className="scroll-mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <RefreshCw className="h-6 w-6" />
                  <h2 className="text-3xl font-serif tracking-tight">
                    Devoluciones y Reembolsos
                  </h2>
                </div>

                <div className="prose prose-neutral max-w-none space-y-6 text-foreground/90 leading-relaxed">
                  <p>
                    Su satisfacción es nuestra prioridad. Si no está
                    completamente satisfecho con su compra, ofrecemos una
                    política de devolución flexible para garantizar una
                    experiencia de compra sin riesgos.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    1. Período de Devolución
                  </h3>
                  <p>
                    Aceptamos devoluciones dentro de los{" "}
                    <strong>30 días</strong> posteriores a la fecha de entrega.
                    Para ser elegible para una devolución, los artículos deben
                    cumplir con las siguientes condiciones:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Estar sin usar, sin lavar y en su condición original
                    </li>
                    <li>Tener todas las etiquetas originales adjuntas</li>
                    <li>Estar en su empaque original (si aplica)</li>
                    <li>
                      Incluir todos los accesorios, manuales y materiales que
                      venían con el producto
                    </li>
                    <li>No mostrar signos de uso, desgaste o alteración</li>
                  </ul>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    2. Artículos No Retornables
                  </h3>
                  <p>
                    Por razones de higiene y seguridad, los siguientes artículos
                    no pueden ser devueltos:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Ropa interior, lencería y trajes de baño (a menos que
                      estén defectuosos)
                    </li>
                    <li>Productos de cuidado personal y cosméticos abiertos</li>
                    <li>Artículos personalizados o hechos a medida</li>
                    <li>
                      Productos en oferta final o liquidación (marcados como
                      &quot;venta final&quot;)
                    </li>
                    <li>Tarjetas de regalo y certificados de regalo</li>
                    <li>Productos descargables o digitales</li>
                    <li>
                      Artículos dañados por mal uso o negligencia del cliente
                    </li>
                  </ul>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    3. Proceso de Devolución
                  </h3>
                  <p>Para iniciar una devolución, siga estos pasos:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Paso 1:</strong> Inicie sesión en su cuenta y vaya
                      a &quot;Mis Pedidos&quot;
                    </li>
                    <li>
                      <strong>Paso 2:</strong> Seleccione el pedido que desea
                      devolver y haga clic en &quot;Solicitar Devolución&quot;
                    </li>
                    <li>
                      <strong>Paso 3:</strong> Seleccione los artículos que
                      desea devolver y el motivo de la devolución
                    </li>
                    <li>
                      <strong>Paso 4:</strong> Recibirá un correo electrónico
                      con una etiqueta de devolución prepagada y las
                      instrucciones
                    </li>
                    <li>
                      <strong>Paso 5:</strong> Empaque los artículos de forma
                      segura en su caja original o en un paquete adecuado
                    </li>
                    <li>
                      <strong>Paso 6:</strong> Adjunte la etiqueta de devolución
                      al paquete
                    </li>
                    <li>
                      <strong>Paso 7:</strong> Entregue el paquete en el punto
                      de envío indicado
                    </li>
                  </ul>
                  <p className="mt-4">
                    También puede contactar a nuestro servicio al cliente para
                    obtener asistencia con su devolución:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Correo electrónico: devoluciones@martinezboutique.com
                    </li>
                    <li>Teléfono: +57 310 8756795</li>
                    <li>Chat en vivo en nuestro sitio web</li>
                  </ul>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    4. Costos de Devolución
                  </h3>
                  <p>
                    Los costos de devolución varían según la razón de la
                    devolución:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Producto defectuoso o incorrecto:</strong>{" "}
                      Cubrimos todos los costos de devolución y envío de
                      reemplazo
                    </li>
                    <li>
                      <strong>Cambio de opinión:</strong> El cliente es
                      responsable de los costos de envío de devolución
                    </li>
                    <li>
                      <strong>Talla o ajuste incorrecto:</strong> Ofrecemos un
                      cambio gratuito por una talla diferente (sujeto a
                      disponibilidad)
                    </li>
                  </ul>
                  <p className="mt-4">
                    Para devoluciones nacionales, proporcionamos una etiqueta de
                    devolución prepagada. El costo de envío se deducirá de su
                    reembolso si la devolución es por cambio de opinión.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    5. Inspección y Procesamiento
                  </h3>
                  <p>Una vez que recibamos su devolución:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Inspeccionaremos los artículos para verificar que cumplan
                      con nuestras condiciones de devolución
                    </li>
                    <li>
                      Le enviaremos un correo electrónico confirmando la
                      recepción de su devolución
                    </li>
                    <li>El proceso de inspección toma 2-3 días hábiles</li>
                    <li>
                      Si la devolución es aprobada, procesaremos su reembolso o
                      cambio
                    </li>
                    <li>
                      Si la devolución es rechazada, le explicaremos el motivo y
                      le devolveremos los artículos
                    </li>
                  </ul>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    6. Reembolsos
                  </h3>
                  <p>Una vez aprobada su devolución:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      El reembolso se procesará al método de pago original
                    </li>
                    <li>
                      Los reembolsos generalmente se reflejan en 5-10 días
                      hábiles, dependiendo de su banco o proveedor de tarjeta
                    </li>
                    <li>
                      Recibirá un correo electrónico de confirmación cuando se
                      procese el reembolso
                    </li>
                    <li>
                      El monto del reembolso incluirá el precio del producto y
                      los impuestos aplicables
                    </li>
                    <li>
                      Los costos de envío originales no son reembolsables
                      (excepto en caso de productos defectuosos o incorrectos)
                    </li>
                  </ul>
                  <p className="mt-4">
                    Si pagó con tarjeta de crédito, el reembolso aparecerá como
                    un crédito en su estado de cuenta. Si pagó con PayPal, el
                    reembolso se acreditará a su cuenta de PayPal.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">7. Cambios</h3>
                  <p>
                    Si desea cambiar un artículo por una talla, color o estilo
                    diferente:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Siga el proceso de devolución estándar e indique que desea
                      un cambio
                    </li>
                    <li>Especifique el artículo de reemplazo que desea</li>
                    <li>
                      Verificaremos la disponibilidad del artículo solicitado
                    </li>
                    <li>
                      Si está disponible, enviaremos el artículo de reemplazo
                      sin cargo adicional de envío
                    </li>
                    <li>
                      Si no está disponible, procesaremos un reembolso completo
                    </li>
                  </ul>
                  <p className="mt-4">
                    Los cambios están sujetos a disponibilidad de inventario. Si
                    el artículo que desea no está disponible, le ofreceremos
                    alternativas similares o un reembolso completo.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    8. Productos Defectuosos o Dañados
                  </h3>
                  <p>Si recibe un producto defectuoso o dañado:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Contáctenos inmediatamente (dentro de las 48 horas
                      posteriores a la entrega)
                    </li>
                    <li>Proporcione fotos claras del defecto o daño</li>
                    <li>Describa el problema en detalle</li>
                    <li>
                      Le ofreceremos un reemplazo inmediato o un reembolso
                      completo
                    </li>
                    <li>Cubriremos todos los costos de envío asociados</li>
                  </ul>
                  <p className="mt-4">
                    No es necesario devolver el artículo defectuoso hasta que
                    nuestro equipo de servicio al cliente lo autorice. En
                    algunos casos, podemos pedirle que deseche el artículo de
                    manera responsable.
                  </p>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    9. Devoluciones Internacionales
                  </h3>
                  <p>Para devoluciones internacionales:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Contáctenos antes de enviar cualquier artículo de vuelta
                    </li>
                    <li>
                      Los costos de envío de devolución son responsabilidad del
                      cliente
                    </li>
                    <li>
                      Marque el paquete como &quot;devolución de mercancía&quot;
                      para evitar cargos aduaneros adicionales
                    </li>
                    <li>
                      Los tiempos de procesamiento pueden ser más largos debido
                      a procesos aduaneros
                    </li>
                    <li>
                      No somos responsables por aranceles o impuestos pagados en
                      la compra original
                    </li>
                  </ul>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    10. Garantía de Calidad
                  </h3>
                  <p>
                    Todos nuestros productos están respaldados por nuestra
                    garantía de calidad. Si descubre un defecto de fabricación
                    dentro de los 90 días posteriores a la compra, contáctenos
                    para un reemplazo o reparación gratuita. Esta garantía no
                    cubre:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Desgaste normal por uso</li>
                    <li>
                      Daños causados por mal uso, negligencia o accidentes
                    </li>
                    <li>Alteraciones o reparaciones realizadas por terceros</li>
                    <li>
                      Daños causados por no seguir las instrucciones de cuidado
                    </li>
                  </ul>

                  <h3 className="text-xl font-medium mt-8 mb-4">
                    11. Contacto para Devoluciones
                  </h3>
                  <p>
                    Si tiene preguntas sobre nuestra política de devoluciones o
                    necesita asistencia:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Correo electrónico: martinezboutique@gmail.com</li>
                    <li>
                      Teléfono: +57 310 8756795 (Lunes a Viernes, 9:00 AM - 6:00
                      PM)
                    </li>
                    <li>Chat en vivo: Disponible en nuestro sitio web</li>
                    <li>
                      Dirección de devoluciones: [Dirección completa del
                      almacén]
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            {/* Footer Contact */}
            <div className="mt-20 p-8 bg-muted/50 rounded-lg">
              <h3 className="text-xl font-medium mb-4">
                ¿Necesita más información?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Si tiene preguntas adicionales sobre nuestras políticas o
                necesita asistencia, nuestro equipo de atención al cliente está
                disponible para ayudarle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default">Contactar Soporte</Button>
                <Button variant="outline" asChild>
                  <Link href="/">Volver a la tienda</Link>
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
