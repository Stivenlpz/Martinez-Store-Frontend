"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { apiFetch } from "@/lib/api";
import { StatsCardsType } from "@/types/types";
import {
  Package,
  Users,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  TrendingDown,
  LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Skeleton } from "../ui/skeleton";

export function StatsCards() {
  const [stats, setStats] = useState<StatsCardsType | null>(null);

  const fetchStats = async () => {
    try {
      const data = await apiFetch("/stats");
      console.log(data);
      setStats(data);
    } catch (error) {
      console.error(error);
      toast.error("Error al obtener datos");
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats ? (
          <>
            <Stat Icon={Package} {...stats.products} />
            <Stat Icon={Users} {...stats.users} />
            <Stat Icon={ShoppingCart} {...stats.orders} />
            <Stat
              Icon={DollarSign}
              value={stats.revenue.value.toLocaleString("en-US", {
                style: "currency",
                currency: "COP",
              })}
              title={stats.revenue.title}
              lastMonth={stats.revenue.lastMonth}
            />
          </>
        ) : (
          [1, 2, 3, 4].map((index) => (
            <Skeleton key={index} className="h-48 w-full rounded-xl" />
          ))
        )}
      </div>
    </section>
  );
}

interface StatProps {
  Icon: LucideIcon;
  title: string;
  value: number | string;
  lastMonth: number;
}

const Stat = ({ Icon, title, value, lastMonth }: StatProps) => {
  const numericValue =
    typeof value === "string" ? Number(value.replace(/[^\d.-]/g, "")) : value;

  const changePercent =
    lastMonth && lastMonth !== 0
      ? ((numericValue - lastMonth) / lastMonth) * 100
      : 0;

  const isUp = changePercent >= 0;

  return (
    <Card className="h-48">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-card-foreground">
          {title}
        </CardTitle>
        <Icon className="text-muted-foreground w-5 h-5" />
      </CardHeader>

      <CardContent className="flex flex-col justify-end h-full">
        <div className="text-4xl font-bold text-card-foreground">{value}</div>
        <div className="flex items-center text-xs text-muted-foreground">
          {isUp ? (
            <TrendingUp className="size-3 text-green-500 mr-1" />
          ) : (
            <TrendingDown className="size-3 text-red-500 mr-1" />
          )}
          <span className={isUp ? "text-green-500" : "text-red-500"}>
            {changePercent.toFixed(1)}%
          </span>
          <span className="ml-1">desde el último mes</span>
        </div>
      </CardContent>
    </Card>
  );
};
