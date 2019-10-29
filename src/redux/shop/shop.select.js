import { createSelector } from 'reselect';

const shopCollection = state => state.shop;

const selectShopCollection = createSelector(
    [shopCollection],
    shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectShopCollection],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopCollection],
    collections => collections[collectionUrlParam]
)

export default selectShopCollection;