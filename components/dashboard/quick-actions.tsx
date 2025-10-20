import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Users, ShoppingCart } from "lucide-react";
import Link from "next/link";

const actions = [
  {
    title: "Ver Productos",
    description: "Administra los productos",
    href: "/dashboard/products/new",
    icon: Package,
  },
  {
    title: "Ver usuarios",
    description: "Administra los usuarios",
    href: "/dashboard/users/new",
    icon: Users,
  },
  {
    title: "Ver Ordenes",
    description: "Administra las ordenes",
    href: "/dashboard/orders",
    icon: ShoppingCart,
  },
];

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-card-foreground">Acciones rapidas</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        {actions.map((action) => (
          <Link key={action.title} href={action.href}>
            <Button
              variant="outline"
              className="w-full justify-start gap-3 h-auto p-4 bg-transparent"
            >
              <action.icon className="h-4 w-4" />
              <div className="text-left">
                <div className="font-medium">{action.title}</div>
                <div className="text-xs text-muted-foreground">
                  {action.description}
                </div>
              </div>
            </Button>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
