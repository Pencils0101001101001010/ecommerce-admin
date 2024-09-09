import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SettingsForm from "./components/SettingsForm";

interface SettingsPageProps {
  params: {
    storeId: string;
  };
}
//uses React.FunctionalComponent (F.C)
const SettingsPage: React.FC<SettingsPageProps> = async ({ params }) => {
  //replace with our own auth system
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }
  // findFirst(): retrieves the first record that matches the specified criteria
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
    <div className="flex-col">
      <div className="flex-l space-y-4 p-8 pt-6">
        <SettingsForm initialData={store} />{" "}
      </div>
    </div>
  );
};

export default SettingsPage;
