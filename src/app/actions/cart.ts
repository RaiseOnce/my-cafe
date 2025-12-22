// actions/cart.ts
'use server'

import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { prisma } from '../../../prisma/prisma-client'

export async function addToCart(productItemId: number) {
  const cookieStore = await cookies()
  const token = cookieStore.get('cartToken')?.value
  if (!token) return

  const cart = await prisma.cart.upsert({
    where: { token },
    create: { token },
    update: {},
  })

  await prisma.cartItem.upsert({
    where: {
      cartId_productItemId: {
        cartId: cart.id,
        productItemId,
      },
    },
    update: { quantity: { increment: 1 } },
    create: {
      cartId: cart.id,
      productItemId,
      quantity: 1,
    },
  })

  revalidatePath('/')
}

export async function removeFromCart(productItemId: number) {
  const cookieStore = await cookies()
  const token = cookieStore.get('cartToken')?.value
  if (!token) return

  const cartItem = await prisma.cartItem.findFirst({
    where: {
      productItemId,
      cart: { token },
    },
  })

  if (!cartItem) return

  if (cartItem.quantity > 1) {
    await prisma.cartItem.update({
      where: { id: cartItem.id },
      data: { quantity: { decrement: 1 } },
    })
  } else {
    await prisma.cartItem.delete({
      where: { id: cartItem.id },
    })
  }

  revalidatePath('/')
}
