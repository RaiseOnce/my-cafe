'use client'

import type { Metadata } from 'next'
import Header from '@/components/Header/Header'
import { useEffect } from 'react'
import { Api } from '../services/api-client'
import { useCartStore } from '../store/useCartStore'

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    Api.cart.get().then((cart) => {
      useCartStore.setState({
        items: Object.fromEntries(
          cart.items.map((i: any) => [
            i.productId,
            { productId: i.productId, quantity: i.quantity },
          ])
        ),
      })
    })
  }, [])

  return (
    <main>
      <Header />
      <main>{children}</main>
    </main>
  )
}
