// app/api/cart/add/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { prisma } from '../../../../../prisma/prisma-client'

export async function POST(req: NextRequest) {
  const { productId } = await req.json()
  if (!productId)
    return NextResponse.json({ error: 'productId required' }, { status: 400 })

  const cookieStore = await cookies()
  let token = cookieStore.get('cartToken')?.value

  if (!token) {
    // создаём новый токен для анонимной корзины
    token = crypto.randomUUID()
    cookieStore.set('cartToken', token)
  }

  // найдём корзину или создадим
  let cart = await prisma.cart.findUnique({ where: { token } })
  if (!cart) {
    cart = await prisma.cart.create({ data: { token } })
  }

  // найдём item в корзине
  const existingItem = await prisma.cartItem.findFirst({
    where: { cartId: cart.id, productId },
  })

  if (existingItem) {
    await prisma.cartItem.update({
      where: { id: existingItem.id },
      data: { quantity: existingItem.quantity + 1 },
    })
  } else {
    await prisma.cartItem.create({
      data: { cartId: cart.id, productId, quantity: 1 },
    })
  }

  return NextResponse.json({ success: true })
}
