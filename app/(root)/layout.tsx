import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-up");
  }
  //holding first store available for currently logged in user
  const store = await prismadb.store.findFirst({
    where: {
      userId,
    },
  });
  //if that store exists we redirect to [storeId] and to the the dashboard where the dashboard will confirm auth again
  if (store) {
    redirect(`/${store.id}`);
  }

  return <>{children}</>;
}
