export const addItem = (item) => {
    return {type:'addItem',payloads:item}
}
export const removeItem = (item) => {
    return {type:'removeItem',payloads:item}
}
export const removeOneItem = (item) => {
    return { type: 'removeOneItem', payloads: item }
}

export const removeFavorite = (item) => {
    return {type:'removeFavorite',payloads:item}
}
export const addFavorite = (item) => {
    return {type:'addFavorite',payloads:item}
}