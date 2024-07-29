import { createReducer, on } from "@ngrx/store";
import { Contact } from "./contact.model";
import { addContact, selectContact } from "./contact.actions";

export interface ContactState {
    contacts: Contact[];
    selectedContact: Contact | null;
}

export const initialState: ContactState = {
  contacts: [
    {
        id: '1',
        firstName: 'Toni',
        lastName: 'Buconjic',
        phone: '123456789',
        email: 'placeholder1@placeholder.com',
        address: 'random address 123'
    },
    {
        id: '2',
        firstName: 'John',
        lastName: 'Smith',
        phone: '987654321',
        email: 'placeholder2@placeholder.com',
        address: 'random address 456'
    },
    {
        id: '3',
        firstName: 'Jane',
        lastName: 'Doe',
        phone: '918273645',
        email: 'placeholder3@placeholder.com',
        address: 'random address 789'
    },
    {
        id: '4',
        firstName: 'Fourth',
        lastName: 'Contact',
        phone: '102938475',
        email: 'placeholder4@placeholder.com',
        address: 'random address 864'
    },
    {
        id: '5',
        firstName: 'Fifth',
        lastName: 'Contact',
        phone: '916424507',
        email: 'placeholder5@placeholder.com',
        address: 'random address 468'
    },
  ],
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