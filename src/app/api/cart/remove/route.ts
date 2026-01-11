// app/api/cart/remove/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { prisma } from '../../../../../prisma/prisma-client'

export async function POST(req: NextRequest) {
  const { productId } = await req.json()
  if (!productId)
    return NextResponse.json({ error: 'productId required' }, { status: 400 })

  const cookieStore = await cookies()
  const token = cookieStore.get('cartToken')?.value
  if (!token) return NextResponse.json({ items: [] })

  const cart = await prisma.cart.findUnique({ where: { token } })
  if (!cart) return NextResponse.json({ items: [] })

  const item = await prisma.cartItem.findFirst({
    where: { cartId: cart.id, productId },
  })

  if (item) {
    if (item.quantity <= 1) {
      await prisma.cartItem.delete({ where: { id: item.id } })
    } else {
      await prisma.cartItem.update({
        where: { id: item.id },
        data: { quantity: item.quantity - 1 },
      })
    }
  }

  return NextResponse.json({ success: true })
}
