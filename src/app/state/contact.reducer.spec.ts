import { addContact, selectContact } from "./contact.actions";
import { contactReducer } from "./contact.reducer";
  
describe('contactReducer', () => {
    const mockInitialStateEmpty = {
        contacts: [],
        selectedContact: null,
    };
    
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

    it('addContact should add contact to contact state', () => {
      const newContact = {
          id: '1',
          firstName: 'Toni',
          lastName: 'Buconjic',
          phone: '123456789',
          email: 'placeholder1@placeholder.com',
          address: 'random address 123'
      };

      const action = addContact({ contact: newContact });

      const newState = {
        contacts: [{ ...newContact, id: '1' }],
        selectedContact: null,
      };    
      const resultState = contactReducer(mockInitialStateEmpty, action);
      expect(resultState).toEqual(newState);
      expect(resultState).not.toEqual(mockInitialStateEmpty);
    });
    
    it('selectContact should set state selectedContact to contact with matching id', () => {
      const action = selectContact({ contactId: '2' }); 
      const newState = {
        contacts: mockInitialStateWithContacts.contacts,
        selectedContact:             {
            id: '2',
            firstName: 'John',
            lastName: 'Smith',
            phone: '987654321',
            email: 'placeholder2@placeholder.com',
            address: 'random address 456'
        }
      };    
      const resultState = contactReducer(mockInitialStateWithContacts, action);
      expect(resultState).toEqual(newState);
      expect(resultState).not.toEqual(mockInitialStateWithContacts);
    }); 

    it('selectContact should set state selectedContact to null if no contact with matching id is found', () => {
      const action = selectContact({ contactId: '999' });   
      const resultState = contactReducer(mockInitialStateWithContacts, action);
      expect(resultState).toEqual(mockInitialStateWithContacts);
    });
});