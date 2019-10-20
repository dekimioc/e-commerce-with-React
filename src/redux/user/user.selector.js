import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const createUser = createSelector(
    [selectUser],
    (user) => user.currentUsers
)