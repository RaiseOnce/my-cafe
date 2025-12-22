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

  await prisma.productItem.createMany({
    data: [
      {
        productId: 1,
        price: 250,
        weight: 150,
      },
      {
        productId: 2,
        price: 300,
        weight: 250,
      },
      {
        productId: 3,
        price: 350,
        weight: 300,
      },
      {
        productId: 4,
        price: 200,
        weight: 350,
      },
      {
        productId: 5,
        price: 450,
        weight: 150,
      },
      {
        productId: 6,
        price: 250,
        weight: 250,
      },
      {
        productId: 7,
        price: 450,
        weight: 100,
      },
      {
        productId: 8,
        price: 350,
        weight: 200,
      },
      {
        productId: 9,
        price: 300,
        weight: 150,
      },
      {
        productId: 10,
        price: 200,
        weight: 350,
      },
      {
        productId: 11,
        price: 250,
        weight: 100,
      },
      {
        productId: 12,
        price: 400,
        weight: 350,
      },
      {
        productId: 13,
        price: 350,
        weight: 200,
      },
      {
        productId: 14,
        price: 400,
        weight: 300,
      },
      {
        productId: 15,
        price: 250,
        weight: 100,
      },
      {
        productId: 16,
        price: 300,
        weight: 250,
      },
      {
        productId: 17,
        price: 350,
        weight: 100,
      },
    ],
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
      productItemId: 1,
      cartId: 1,
      quantity: 2,
    },
  })
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`
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
