
export const Reducer = (state = { card: [], favorite: [] }, action) => {
    let index, Item;

    switch (action.type) {
        case 'addItem':

            //if there is a product increase the count if not add it to the products
            index = state.card.findIndex((e) => e.id === action.payloads.id);
            console.log({ index });
            if (index !== -1)
                Item = state.card.map((e) => {
                    if (e.id === action.payloads.id) e.cnt++;
                    return e;
                });
            else Item = [...state.card, { ...action.payloads, cnt: 1 }];
            return {
                card: Item,
                favorite: state.favorite,
            };
        //remove item or decrease count
        case 'removeOneItem':
            if (action.payloads.cnt > 1)
                Item = state.card.map((e) => {
                    if (e.id === action.payloads.id) e.cnt--;
                    return e;
                });
            else Item = state.card.filter((e) => e.id !== action.payloads.id);
            return {
                card: Item,
                favorite: state.favorite,
            };
        //remove the whole products 

        case 'removeItem':
            return {
                card: state.card.filter((e) => e.id !== action.payloads.id),
                favorite: state.favorite,
            };
        // add products to the favorite
        case 'addFavorite':
            return {
                card: state.card,
                favorite: [...state.favorite, action.payloads],
            };
        // remove a products from favorite
        case 'removeFavorite':
            return {
                card: [...state.card],
                favorite: state.favorite.filter(
                    (e) => e.id !== action.payloads.id
                ),
            };

        default:
            return state;
    }
};
