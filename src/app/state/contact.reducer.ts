import { createReducer, on } from "@ngrx/store";
import { Contact } from "./contact.model";
import { addContact, selectContact } from "./contact.actions";

export interface ContactState {
    contacts: Contact[];
    selectedContact: Contact | null;
}

export const initialState: ContactState = {
  contacts: [],
  selectedContact: null,
};

export const contactReducer = createReducer(
    initialState,
    on(addContact, (state, { contact }) => ({
        ...state,
        contacts: [...state.contacts, { ...contact, id: (state.contacts.length + 1).toString() }]
    })),
    on(selectContact, (state, { contactId }) => ({
        ...state,
        selectedContact: state.contacts.find(contact => contact.id === contactId) || null
    }))
)