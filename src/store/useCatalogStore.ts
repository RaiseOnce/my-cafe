import { create } from 'zustand'

type CatalogState = {
  activeCategory: string
  activeSort: string
  setActiveCategory: (category: string) => void
  setActiveSort: (sort: string) => void
}

export const useCatalogStore = create<CatalogState>((set) => ({
  activeCategory: 'Все',
  activeSort: 'По умолчанию',
  setActiveCategory: (category) => set({ activeCategory: category }),
  setActiveSort: (sort) => set({ activeSort: sort }),
}))
