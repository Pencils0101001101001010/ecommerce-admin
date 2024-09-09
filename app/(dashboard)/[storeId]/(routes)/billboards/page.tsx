import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import { BillboardCLient } from "./components/client";
import { BillboardColumn } from "./components/columns";

const BillboardPage = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedBillboards: BillboardColumn[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-l space-x-4 p-8 pt-6">
        <BillboardCLient data={formattedBillboards} />
      </div>
    </div>
  );
};

export default BillboardPage;
