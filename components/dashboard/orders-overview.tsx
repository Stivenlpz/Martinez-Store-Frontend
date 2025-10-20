"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { apiFetch } from "@/lib/api";
import { OrderType } from "@/types/types";
import { useEffect, useMemo, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { toast } from "sonner";

export function OrdersOverview() {
  const [orders, setOrders] = useState<OrderType[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await apiFetch("/orders");
        console.log(data);
        setOrders(data);
      } catch (error) {
        console.error(error);
        toast.error("Error al obtener las órdenes");
      }
    };
    fetchOrders();
  }, []);

  const orderData = useMemo(() => {
    const counts = {
      completado: 0,
      procesando: 0,
      pendiente: 0,
      cancelado: 0,
    };

    orders.forEach((order) => {
      switch (order.status) {
        case "DELIVERED":
          counts.completado++;
          break;
        case "PROCESSING":
        case "PAID":
        case "SHIPPED":
          counts.procesando++;
          break;
        case "PENDING":
          counts.pendiente++;
          break;
        case "CANCELLED":
        case "REFUNDED":
          counts.cancelado++;
          break;
        default:
          break;
      }
    });

    return [
      {
        name: "Completado",
        value: counts.completado,
        color: "var(--color-chart-1)",
      },
      {
        name: "Procesando",
        value: counts.procesando,
        color: "var(--color-chart-2)",
      },
      {
        name: "Pendiente",
        value: counts.pendiente,
        color: "var(--color-chart-3)",
      },
      {
        name: "Cancelado",
        value: counts.cancelado,
        color: "var(--color-chart-4)",
      },
    ];
  }, [orders]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-card-foreground">
          Distribución de órdenes
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={orderData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={0}
              dataKey="value"
            >
              {orderData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  fillOpacity={0.6}
                />
              ))}
            </Pie>

            <Tooltip
              formatter={(value: number) => [`${value} órdenes`, "Cantidad"]}
              contentStyle={{
                color: "var(--color-foreground)",
                backgroundColor: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
              }}
            />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
