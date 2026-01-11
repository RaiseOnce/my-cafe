// app/api/cart/route.ts
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { prisma } from '../../../../prisma/prisma-client'
import { CartItem } from '@prisma/client'

export async function GET() {
  const cookieStore = await cookies()
  const token = cookieStore.get('cartToken')?.value

  if (!token) {
    return NextResponse.json({ items: [] })
  }

  const cart = await prisma.cart.findUnique({
    where: { token },
    include: { items: true },
  })

  return NextResponse.json({
    items:
      cart?.items.map((item: CartItem) => ({
        productId: item.productId,
        quantity: item.quantity,
      })) ?? [],
  })
}
