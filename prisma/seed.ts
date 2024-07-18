const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      registers: [
        {
          usageTime: new Date(),
        },
        {
          usageTime: new Date(),
        },
      ],
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      age: 30,
      registers: [
        {
          usageTime: new Date(),
        },
      ],
    },
    // Add more users and registers as needed
  ];

  for (const user of users) {
    const { registers, ...userData } = user;
    const createdUser = await prisma.user.create({
      data: {
        ...userData,
        registers: {
          create: registers,
        },
      },
      include: {
        registers: true,
      },
    });

    console.log('Created user:', createdUser);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
