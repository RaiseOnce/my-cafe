// store/useCatalogStore.ts
import { create } from 'zustand'

type CatalogState = {
  activeCategory: string
  activeSort: 'Дороже' | 'Дешевле' | null
  setCategory: (c: string) => void
  setSort: (s: CatalogState['activeSort']) => void
}

export const useCatalogStore = create<CatalogState>((set) => ({
  activeCategory: 'Все',
  activeSort: null,
  setCategory: (activeCategory) => set({ activeCategory }),
  setSort: (activeSort) => set({ activeSort }),
}))
