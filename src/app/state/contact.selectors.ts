import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ContactState } from "./contact.reducer";

const selectContacts = createFeatureSelector<ContactState>('contacts');

export const selectAllContacts = createSelector(
    selectContacts,
    (state: ContactState) => state.contacts
);

export const selectSelectedContact= createSelector(
    selectContacts,
    (state: ContactState) => state.selectedContact
);