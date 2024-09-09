import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";
import Navbar from "@/components/Navbar";

//in this file we create the function where the user can try to access their store with id and it checks if that id exists if the id doesn't exist it redirects to sign-in
export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  //Dashboard confirms if the store exists with the current userId
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
