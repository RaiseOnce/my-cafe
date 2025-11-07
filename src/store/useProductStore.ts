import { create } from 'zustand'
import { StaticImageData } from 'next/image'

export type Product = {
  id: number | string
  name: string
  category: string
  weight: string
  price: number
  image: StaticImageData | string
  link: string
  bookmark: boolean
  count: number
}

type ProductState = {
  products: Product[]
  setProducts: (products: Product[]) => void
  increaseCount: (id: Product['id']) => void
  decreaseCount: (id: Product['id']) => void
  toggleBookmark: (id: Product['id']) => void
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),

  increaseCount: (id) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === id ? { ...p, count: p.count + 1 } : p
      ),
    })),

  decreaseCount: (id) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === id ? { ...p, count: Math.max(p.count - 1, 0) } : p
      ),
    })),

  toggleBookmark: (id) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === id ? { ...p, bookmark: !p.bookmark } : p
      ),
    })),
}))
