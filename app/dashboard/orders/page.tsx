import { OrdersTable } from "@/components/dashboard/orders/orders-table";

export default function OrdersPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Ordenes</h1>
        <p className="text-muted-foreground">
          Administra las ordenes de compra
        </p>
      </div>

      <OrdersTable />
    </div>
  );
}
