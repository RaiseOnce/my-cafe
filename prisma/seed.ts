import { categories, products } from './constants'
import { prisma } from './prisma-client'
import { hashSync } from 'bcrypt'

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User Test',
        phone: '+99381919191',
        verified: true,
        role: 'USER',
      },
      {
        fullName: 'Admin Admin',
        email: 'admin@gmail.com',
        password: hashSync('111111', 10),
        role: 'ADMIN',
      },
    ],
  })

  await prisma.category.createMany({
    data: categories,
  })

  await prisma.product.createMany({
    data: products,
  })

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: '12345',
      },

      {
        userId: 2,
        totalAmount: 0,
        token: '67890',
      },
    ],
  })

  await prisma.cartItem.create({
    data: {
      productId: 1,
      cartId: 1,
      quantity: 2,
    },
  })
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`
}

async function main() {
  try {
    await down()
    await up()
  } catch (e) {
    console.error(e)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
