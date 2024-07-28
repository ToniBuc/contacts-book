import { selectAllContacts, selectSelectedContact } from './contact.selectors';

const mockInitialStateWithContacts = {
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
    ],
    selectedContact: null,
}

describe('contact selectors', () => {
    it('selectAllContacts should select all contacts in state contacts array', () => {
        const selectResult = selectAllContacts.projector(mockInitialStateWithContacts);
        expect(selectResult).toEqual(mockInitialStateWithContacts.contacts);
    });

    it('selectSelectedContact should select selectedContact from state', () => {
      const selectResult = selectSelectedContact.projector(mockInitialStateWithContacts);
      expect(selectResult).toEqual(mockInitialStateWithContacts.selectedContact);
    });

    it('selectSelectedContact should return null if there is no selected contact', () => {
      const selectResult = selectSelectedContact.projector(mockInitialStateWithContacts);
      expect(selectResult).toBeNull();
    });
});