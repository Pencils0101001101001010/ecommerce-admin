"use client";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

import { OrderColumn, columns } from "./columns";

interface OrderClientProps {
  data: OrderColumn[];
}
// shows dynamic amount of billboards
export const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="View Orders for your Store "
      />

      <Separator />
      <DataTable columns={columns} data={data} SearchKey="products" />
    </>
  );
};
