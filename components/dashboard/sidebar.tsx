"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Package, Users, ShoppingCart } from "lucide-react";
import { Logo } from "../navbar/logo";

const navigation = [
  {
    name: "General",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Productos",
    href: "/dashboard/products",
    icon: Package,
  },
  {
    name: "Usuarios",
    href: "/dashboard/users",
    icon: Users,
  },
  {
    name: "Ordenes",
    href: "/dashboard/orders",
    icon: ShoppingCart,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border">
      <div className="w-full flex items-center justify-center">
        <Logo />
      </div>
      <nav className="px-4 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground",
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
