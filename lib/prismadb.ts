import { PrismaClient } from "@prisma/client";

//adding global prisma to prismaThis
declare global {
  var prisma: PrismaClient | undefined;
}

const prismadb = globalThis.prisma || new PrismaClient();
//make sure if it is safe to use globalThis or create a new PrismaClient
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;
