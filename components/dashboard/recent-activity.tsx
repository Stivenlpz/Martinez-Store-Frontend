"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { apiFetch } from "@/lib/api";
import { useEffect, useState } from "react";
import { OrderType } from "@/types/types";
import { toast } from "sonner";
import { formatDistanceToNow, parseISO } from "date-fns";
import { es } from "date-fns/locale";

export function RecentActivity() {
  const [orders, setOrders] = useState<OrderType[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await apiFetch("/orders");
        const sortedOrders = data.sort(
          (a: OrderType, b: OrderType) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        setOrders(sortedOrders.slice(0, 5));
      } catch (error) {
        console.error(error);
        toast.error("Error al obtener las órdenes recientes");
      }
    };

    fetchOrders();
  }, []);

  const getStatusProps = (status: string) => {
    switch (status) {
      case "DELIVERED":
        return { label: "Completado", variant: "default" as const };
      case "PROCESSING":
      case "PAID":
      case "SHIPPED":
        return { label: "Procesando", variant: "secondary" as const };
      case "PENDING":
        return { label: "Pendiente", variant: "outline" as const };
      case "CANCELLED":
      case "REFUNDED":
        return { label: "Cancelado", variant: "destructive" as const };
      default:
        return { label: "Desconocido", variant: "outline" as const };
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-card-foreground">Últimas órdenes</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {orders.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No hay órdenes recientes.
          </p>
        ) : (
          orders.map((order) => {
            const status = getStatusProps(order.status);
            const timeAgo = order.createdAt
              ? formatDistanceToNow(parseISO(order.createdAt), {
                  addSuffix: true,
                  locale: es,
                })
              : "Fecha desconocida";

            return (
              <div
                key={order.id}
                className="flex items-center justify-between border-b pb-2 last:border-none"
              >
                <div className="flex-1">
                  <p className="text-sm text-card-foreground font-medium">
                    Orden #{order.id}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {order.user.name
                      ? `Cliente: ${order.user.name}`
                      : "Cliente desconocido"}
                  </p>
                  <p className="text-xs text-muted-foreground">{timeAgo}</p>
                </div>
                <Badge variant={status.variant}>{status.label}</Badge>
              </div>
            );
          })
        )}
      </CardContent>
    </Card>
  );
}
