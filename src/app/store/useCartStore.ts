// app/store/useCartStore.ts
import { create } from 'zustand'
import { Api } from '@/app/services/api-client'

type CartItem = {
  productId: number
  quantity: number
}

type CartState = {
  items: Record<number, CartItem>
  add: (productId: number) => Promise<void>
  remove: (productId: number) => Promise<void>
}

export const useCartStore = create<CartState>((set, get) => ({
  items: {},

  add: async (productId) => {
    set((state) => {
      const current = state.items[productId]?.quantity ?? 0
      return {
        items: {
          ...state.items,
          [productId]: { productId, quantity: current + 1 },
        },
      }
    })

    await Api.cart.add(productId)
  },

  remove: async (productId) => {
    set((state) => {
      const current = state.items[productId]?.quantity ?? 0
      if (current <= 1) {
        const { [productId]: _, ...rest } = state.items
        return { items: rest }
      }

      return {
        items: {
          ...state.items,
          [productId]: { productId, quantity: current - 1 },
        },
      }
    })

    await Api.cart.remove(productId)
  },
}))
