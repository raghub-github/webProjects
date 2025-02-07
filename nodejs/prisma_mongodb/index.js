import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  // Create a new user
    // const newUser = await prisma.user.create({
    //     data: {
    //     name: "Alice",
    //     email: "alice@example.com",
    //     },
    // });
    // console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`);

    // Add many users to the database
    // const newUsers = await prisma.user.createMany({
    //     data: [
    //     { name: "raghu", email: "raghu@gmail.com" },
    //     { name: "Bob", email: "bob@gmail" },
    //     { name: "Charlie", email: "chris@gmail" },
    //     ]
    // });
    // console.log(`Created new users: ${newUsers.count}`);

    // Read all users from the database and print them to the console
    // const allusers = await prisma.user.findMany();
    // console.log(allusers);

    // Find a user by their email
    const singleUser = await prisma.user.findUnique({
        where: {
          email: "bob@gmail", 
        },
      });
    console.log(singleUser);
    
    // Update the user's email
    // const updateUser = await prisma.user.update({ 
    //     where: { id: "67a59c0dc9171b6fc25ccddd" },
    //     data: { email: "bob@gmail.com" },
    // });
    // console.log(updateUser);

    // Delete a user
    // const deleteUser = await prisma.user.delete({
    //     where: { id: "67a59c0dc9171b6fc25ccddd" },
    // }); 
    // console.log(deleteUser);
};

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })