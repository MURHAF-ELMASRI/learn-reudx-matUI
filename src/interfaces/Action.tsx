import { Item } from './Item'
import { Product } from './Product'


export type Action = {
    type: 'addItem',
    payloads: Item
}
    | {
        type: 'addFavorite' | 'removeFavorite' | 'removeOneItem' | 'removeItem',
        payloads: { id: number }
    } | {
        type: 'addProducts',
        payloads: Product[]
    }