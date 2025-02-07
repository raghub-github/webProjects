import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // Insert data into the database
    // const prisma_db = await prisma.prisma_db.create({
    //     data: {
    //         title: "prisma",
    //         content: "prisma is a database",
    //     },
    // });
    // console.log(prisma_db);  
    
    // InsertMany data into the database
    // const prisma_db_many = await prisma.prisma_db.createMany({
    //     data: [
    //         {
    //             title: "prisma_db_many",
    //             content: "prisma is a database",
    //         },
    //         {
    //             title: "prisma_db_many2",
    //             content: "prisma is a database",
    //         },
    //     ],
    // });
    // console.log(prisma_db_many);

    // Read data from the database
    // const prisma_db = await prisma.prisma_db.findMany();
    // console.log(prisma_db);

    // Read single id from the database
    // const prisma_db = await prisma.prisma_db.findUnique({
    //     where: {
    //         id: 2,
    //     },
    // });
    // console.log(prisma_db);

    // const prisma_db = await prisma.prisma_db.findMany({
    //     where: {
    //         title: 'prisma_db_many2',
    //     },
    // });
    // console.log(prisma_db);

    // Update data in the database
    // const prisma_db = await prisma.prisma_db.update({
    //     where: {
    //         id: 2,
    //     },
    //     data: {
    //         title: "prisma_db_update",
    //         content: "prisma is a database",
    //     },
    // });
    // console.log(prisma_db);

    // Delete data from the database
    // const prisma_db = await prisma.prisma_db.delete({
    //     where: {
    //         id: 2,
    //     },
    // });
    // console.log(prisma_db);

    // DeleteMany data from the database
    // const prisma_db = await prisma.prisma_db.deleteMany({
    //     where: {
    //         title: "prisma_db_many",
    //     },
    // });
    // console.log(prisma_db);
};

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
