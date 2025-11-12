import { ProductForm } from "@/components/dashboard/products/product-form";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface EditProductPageProps {
  params: {
    id: string;
  };
}

export default function EditProductPage({ params }: EditProductPageProps) {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Link href={`/dashboard/products/${params.id}`}>
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Editar Producto
          </h1>
          <p className="text-muted-foreground">
            Actualizar informacion del producto
          </p>
        </div>
      </div>

      <ProductForm productId={params.id} />
    </div>
  );
}
