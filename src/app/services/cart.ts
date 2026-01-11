import { axiosInstance } from './instance'
import { ApiRoutes } from './constants'

export type CartItem = {
  productId: number
  quantity: number
}

export type CartResponse = {
  items: CartItem[]
}

export const cart = {
  get: async (): Promise<CartResponse> => {
    const { data } = await axiosInstance.get<CartResponse>(ApiRoutes.CART_GET)
    return data
  },

  add: async (productId: number): Promise<void> => {
    await axiosInstance.post(ApiRoutes.CART_ADD, { productId })
  },

  remove: async (productId: number): Promise<void> => {
    await axiosInstance.post(ApiRoutes.CART_REMOVE, { productId })
  },
}
