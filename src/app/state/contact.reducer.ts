import { createReducer, on } from "@ngrx/store";
import { Contact } from "./contact.model";
import { addContact } from "./contact.actions";

export interface ContactState {
    contacts: Contact[];
}

export const initialState: ContactState = {
  contacts: []
};

export const contactReducer = createReducer(
    initialState,
    on(addContact, (state, { contact }) => ({
        ...state,
        contacts: [...state.contacts, { ...contact, id: (state.contacts.length + 1).toString() }]
    }))
)