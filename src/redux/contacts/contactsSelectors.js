import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter;
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectCompleted = state => state.contacts.completed;

export const selectedVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (contacts && contacts.length) {
      return contacts.filter(({ name }) =>
        name.toLowerCase().trim().includes(filter.toLowerCase().trim())
      );
    } else {
      return [];
    }
  }
);
