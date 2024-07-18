const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Car Types
  const hatchback = await prisma.vehicleType.create({
    data: {
      name: "Hatchback",
      category: "Four-Wheeler",
      Vehicle: {
        create: [
          { name: "Volkswagen Golf" },
          { name: "Ford Fiesta" },
          { name: "Honda Fit" },
        ],
      },
    },
  });

  const suv = await prisma.vehicleType.create({
    data: {
      name: "SUV",
      category: "Four-Wheeler",
      Vehicle: {
        create: [
          { name: "Toyota RAV4" },
          { name: "Honda CR-V" },
          { name: "Ford Escape" },
        ],
      },
    },
  });

  const sedan = await prisma.vehicleType.create({
    data: {
      name: "Sedan",
      category: "Four-Wheeler",
      Vehicle: {
        create: [
          { name: "Toyota Camry" },
          { name: "Honda Accord" },
          { name: "Tesla Model S" },
        ],
      },
    },
  });

  // Bike Type
  const sports = await prisma.vehicleType.create({
    data: {
      name: "Sports",
      category: "Two-Wheeler",
      Vehicle: {
        create: [
          { name: "Yamaha YZF-R1" },
          { name: "Kawasaki Ninja ZX-10R" },
          { name: "Ducati Panigale V4" },
        ],
      },
    },
  });

  console.log({ hatchback, suv, sedan, sports });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
