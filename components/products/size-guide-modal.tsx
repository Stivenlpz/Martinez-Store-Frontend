"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SizeGuideModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="gap-2 px-0">
          Guía de Tallas
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">
            Guía de Tallas
          </DialogTitle>
          <DialogDescription>
            Encuentra tu talla perfecta con nuestras tablas de medidas
            detalladas
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="mujer" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="mujer">Mujer</TabsTrigger>
            <TabsTrigger value="hombre">Hombre</TabsTrigger>
            <TabsTrigger value="ninos">Niños</TabsTrigger>
          </TabsList>

          {/* Tallas Mujer */}
          <TabsContent value="mujer" className="space-y-6 mt-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Ropa de Mujer</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Talla</th>
                      <th className="text-left py-3 px-4 font-medium">
                        Busto (cm)
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Cintura (cm)
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Cadera (cm)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">XS</td>
                      <td className="py-3 px-4">78-82</td>
                      <td className="py-3 px-4">60-64</td>
                      <td className="py-3 px-4">86-90</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">S</td>
                      <td className="py-3 px-4">82-86</td>
                      <td className="py-3 px-4">64-68</td>
                      <td className="py-3 px-4">90-94</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">M</td>
                      <td className="py-3 px-4">86-90</td>
                      <td className="py-3 px-4">68-72</td>
                      <td className="py-3 px-4">94-98</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">L</td>
                      <td className="py-3 px-4">90-96</td>
                      <td className="py-3 px-4">72-78</td>
                      <td className="py-3 px-4">98-104</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">XL</td>
                      <td className="py-3 px-4">96-102</td>
                      <td className="py-3 px-4">78-84</td>
                      <td className="py-3 px-4">104-110</td>
                    </tr>
                    <tr className="hover:bg-muted/50">
                      <td className="py-3 px-4">XXL</td>
                      <td className="py-3 px-4">102-108</td>
                      <td className="py-3 px-4">84-90</td>
                      <td className="py-3 px-4">110-116</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Calzado de Mujer</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">
                        Talla EU
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Talla US
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Talla UK
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Longitud (cm)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">35</td>
                      <td className="py-3 px-4">5</td>
                      <td className="py-3 px-4">2.5</td>
                      <td className="py-3 px-4">22.0</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">36</td>
                      <td className="py-3 px-4">6</td>
                      <td className="py-3 px-4">3.5</td>
                      <td className="py-3 px-4">22.5</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">37</td>
                      <td className="py-3 px-4">7</td>
                      <td className="py-3 px-4">4.5</td>
                      <td className="py-3 px-4">23.5</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">38</td>
                      <td className="py-3 px-4">7.5</td>
                      <td className="py-3 px-4">5</td>
                      <td className="py-3 px-4">24.0</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">39</td>
                      <td className="py-3 px-4">8</td>
                      <td className="py-3 px-4">6</td>
                      <td className="py-3 px-4">25.0</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">40</td>
                      <td className="py-3 px-4">9</td>
                      <td className="py-3 px-4">7</td>
                      <td className="py-3 px-4">25.5</td>
                    </tr>
                    <tr className="hover:bg-muted/50">
                      <td className="py-3 px-4">41</td>
                      <td className="py-3 px-4">10</td>
                      <td className="py-3 px-4">8</td>
                      <td className="py-3 px-4">26.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          {/* Tallas Hombre */}
          <TabsContent value="hombre" className="space-y-6 mt-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Ropa de Hombre</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Talla</th>
                      <th className="text-left py-3 px-4 font-medium">
                        Pecho (cm)
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Cintura (cm)
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Cadera (cm)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">XS</td>
                      <td className="py-3 px-4">86-90</td>
                      <td className="py-3 px-4">72-76</td>
                      <td className="py-3 px-4">90-94</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">S</td>
                      <td className="py-3 px-4">90-94</td>
                      <td className="py-3 px-4">76-80</td>
                      <td className="py-3 px-4">94-98</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">M</td>
                      <td className="py-3 px-4">94-98</td>
                      <td className="py-3 px-4">80-84</td>
                      <td className="py-3 px-4">98-102</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">L</td>
                      <td className="py-3 px-4">98-104</td>
                      <td className="py-3 px-4">84-90</td>
                      <td className="py-3 px-4">102-108</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">XL</td>
                      <td className="py-3 px-4">104-110</td>
                      <td className="py-3 px-4">90-96</td>
                      <td className="py-3 px-4">108-114</td>
                    </tr>
                    <tr className="hover:bg-muted/50">
                      <td className="py-3 px-4">XXL</td>
                      <td className="py-3 px-4">110-118</td>
                      <td className="py-3 px-4">96-104</td>
                      <td className="py-3 px-4">114-122</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Calzado de Hombre</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">
                        Talla EU
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Talla US
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Talla UK
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Longitud (cm)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">39</td>
                      <td className="py-3 px-4">6.5</td>
                      <td className="py-3 px-4">6</td>
                      <td className="py-3 px-4">24.5</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">40</td>
                      <td className="py-3 px-4">7</td>
                      <td className="py-3 px-4">6.5</td>
                      <td className="py-3 px-4">25.0</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">41</td>
                      <td className="py-3 px-4">8</td>
                      <td className="py-3 px-4">7.5</td>
                      <td className="py-3 px-4">26.0</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">42</td>
                      <td className="py-3 px-4">8.5</td>
                      <td className="py-3 px-4">8</td>
                      <td className="py-3 px-4">26.5</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">43</td>
                      <td className="py-3 px-4">9.5</td>
                      <td className="py-3 px-4">9</td>
                      <td className="py-3 px-4">27.5</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">44</td>
                      <td className="py-3 px-4">10</td>
                      <td className="py-3 px-4">9.5</td>
                      <td className="py-3 px-4">28.0</td>
                    </tr>
                    <tr className="hover:bg-muted/50">
                      <td className="py-3 px-4">45</td>
                      <td className="py-3 px-4">11</td>
                      <td className="py-3 px-4">10.5</td>
                      <td className="py-3 px-4">29.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          {/* Tallas Niños */}
          <TabsContent value="ninos" className="space-y-6 mt-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Ropa de Niños</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Talla</th>
                      <th className="text-left py-3 px-4 font-medium">Edad</th>
                      <th className="text-left py-3 px-4 font-medium">
                        Altura (cm)
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Pecho (cm)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">2-3</td>
                      <td className="py-3 px-4">2-3 años</td>
                      <td className="py-3 px-4">92-98</td>
                      <td className="py-3 px-4">52-54</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">4-5</td>
                      <td className="py-3 px-4">4-5 años</td>
                      <td className="py-3 px-4">104-110</td>
                      <td className="py-3 px-4">56-58</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">6-7</td>
                      <td className="py-3 px-4">6-7 años</td>
                      <td className="py-3 px-4">116-122</td>
                      <td className="py-3 px-4">60-62</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">8-9</td>
                      <td className="py-3 px-4">8-9 años</td>
                      <td className="py-3 px-4">128-134</td>
                      <td className="py-3 px-4">64-68</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">10-11</td>
                      <td className="py-3 px-4">10-11 años</td>
                      <td className="py-3 px-4">140-146</td>
                      <td className="py-3 px-4">70-74</td>
                    </tr>
                    <tr className="hover:bg-muted/50">
                      <td className="py-3 px-4">12-14</td>
                      <td className="py-3 px-4">12-14 años</td>
                      <td className="py-3 px-4">152-164</td>
                      <td className="py-3 px-4">76-82</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Calzado de Niños</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">
                        Talla EU
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Talla US
                      </th>
                      <th className="text-left py-3 px-4 font-medium">Edad</th>
                      <th className="text-left py-3 px-4 font-medium">
                        Longitud (cm)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">25</td>
                      <td className="py-3 px-4">8.5</td>
                      <td className="py-3 px-4">2-3 años</td>
                      <td className="py-3 px-4">15.5</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">27</td>
                      <td className="py-3 px-4">10</td>
                      <td className="py-3 px-4">3-4 años</td>
                      <td className="py-3 px-4">16.5</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">29</td>
                      <td className="py-3 px-4">11.5</td>
                      <td className="py-3 px-4">4-5 años</td>
                      <td className="py-3 px-4">18.0</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">31</td>
                      <td className="py-3 px-4">13</td>
                      <td className="py-3 px-4">6-7 años</td>
                      <td className="py-3 px-4">19.5</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">33</td>
                      <td className="py-3 px-4">1.5</td>
                      <td className="py-3 px-4">8-9 años</td>
                      <td className="py-3 px-4">21.0</td>
                    </tr>
                    <tr className="hover:bg-muted/50">
                      <td className="py-3 px-4">35</td>
                      <td className="py-3 px-4">3</td>
                      <td className="py-3 px-4">10-11 años</td>
                      <td className="py-3 px-4">22.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Consejos de medición */}
        <div className="mt-8 p-6 bg-muted/50 rounded-lg space-y-4">
          <h3 className="text-lg font-medium">Cómo Tomar tus Medidas</h3>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Busto/Pecho:</strong> Mide
              alrededor de la parte más completa del busto/pecho, manteniendo la
              cinta métrica horizontal.
            </p>
            <p>
              <strong className="text-foreground">Cintura:</strong> Mide
              alrededor de la parte más estrecha de tu cintura natural,
              generalmente justo encima del ombligo.
            </p>
            <p>
              <strong className="text-foreground">Cadera:</strong> Mide
              alrededor de la parte más completa de tus caderas, manteniendo la
              cinta métrica horizontal.
            </p>
            <p>
              <strong className="text-foreground">Longitud del pie:</strong>{" "}
              Coloca tu pie sobre una hoja de papel y marca el talón y el dedo
              más largo. Mide la distancia entre ambas marcas.
            </p>
          </div>
          <p className="text-sm text-muted-foreground italic">
            Consejo: Si estás entre dos tallas, te recomendamos elegir la talla
            más grande para mayor comodidad.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
