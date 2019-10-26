import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const shopCollection = state => state.shop;

const selectShopCollection = createSelector(
    [shopCollection],
    shop => shop.collections
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopCollection],
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
)

export default selectShopCollection;