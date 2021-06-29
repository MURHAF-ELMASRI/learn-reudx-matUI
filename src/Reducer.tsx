import { Action, GlobalState, Item } from './interfaces'


export const Reducer = (state: GlobalState = { card: [], favorite: [], products: [] }, action: Action): GlobalState => {
    let index, card;

    console.log(action);
    switch (action.type) {
        case 'addItem':

            //if there is a product increase the count if not add it to the products
            index = state.card.findIndex((e: Item) => e.id === action.payloads.id);
            console.log({ index });
            if (index !== -1)
                card = state.card.map((e: Item) => {
                    if (e.id === action.payloads.id) e.cnt++;
                    return e;
                });
            else card = [...state.card, { ...action.payloads, cnt: 1 }];
            return {
                ...state,
                card: card
            };
        //remove item or decrease count
        case 'removeOneItem':
            const item = state.card.find(e => e.id === action.payloads.id)!
            if (item.cnt > 1)
                card = state.card.map((e: Item) => {
                    if (e.id === action.payloads.id) e.cnt--;
                    return e;
                });
            else card = state.card.filter((e: Item) => e.id !== action.payloads.id);

            return {
                ...state,
                card,
            };
        //remove the whole products     

        case 'removeItem':
            return {
                ...state,
                card: state.card.filter((e: Item) => e.id !== action.payloads.id),

            };
        // add products to the favorite
        case 'addFavorite':
            return {
                ...state,
                favorite: [...state.favorite, action.payloads.id],
            };
        // remove a products from favorite
        case 'removeFavorite':
            return {
                ...state,
                favorite: state.favorite.filter(
                    (e: number) => e !== action.payloads.id
                ),
            };

        case 'addProducts':
            return {
                ...state,
                products: [...state.products, ...action.payloads]
            }

        default:
            return state;
    }
};
