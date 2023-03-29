import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  const jon1 = await db.user.create({
    data: {
      username: "jon1",
      password: "js1",
    },
  });
  const mir1 = await db.user.create({
    data: {
      username: "mir1",
      password: "mc1",
    },
  });
}

seed();