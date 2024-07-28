import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListComponent } from './contact-list.component';
import { Store, StoreModule } from '@ngrx/store';
import { contactReducer } from '../../state/contact.reducer';
import { CommonModule } from '@angular/common';
import { selectContact } from '../../state/contact.actions';
import { Contact } from '../../state/contact.model';
import { By } from '@angular/platform-browser';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  let store: Store;

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
        {
          id: '4',
          firstName: 'Jest',
          lastName: 'Test',
          phone: '111111111',
          email: 'placeholder4@placeholder.com',
          address: 'random address 000'
        },
    ],
    selectedContact: {
      id: '3',
      firstName: 'Jane',
      lastName: 'Doe',
      phone: '918273645',
      email: 'placeholder3@placeholder.com',
      address: 'random address 789'
    },
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactListComponent],
      imports: [
        CommonModule,
        StoreModule.forRoot({contacts: contactReducer}, {initialState: {contacts : mockInitialStateWithContacts}})
      ]
    })
    .compileComponents();

    store = TestBed.inject(Store);

    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select allContacts from the store', () => {
    let selectedContacts: Contact[] = [];
    component.contacts$.subscribe(contacts => {
      selectedContacts = contacts;
    })

    expect(selectedContacts).toEqual(mockInitialStateWithContacts.contacts);
  });

  it('should select selectedContact from the store', () => {
    let selectedContact: Contact | null = null;
    component.selectedContact$.subscribe(contact => {
      selectedContact = contact;
    })

    expect(selectedContact!).toEqual(mockInitialStateWithContacts.selectedContact);
  });

  it('onSelect should be called on contact click', () => {
    const mockContactId = '2';
    const spy = jest.spyOn(component, 'onSelect');
    
    const contactRows = fixture.debugElement.queryAll(By.css('.contact-row'))
    const clickedContact = contactRows[1];
    const element: HTMLElement = clickedContact.nativeElement;
  
    element.click();
    fixture.detectChanges();

    expect(spy).toHaveBeenCalledWith(mockContactId);
  });

  it('onSelect, store should dispatch selectContact action', () => {
    const mockContactId = '1';
    const action = selectContact({ contactId: mockContactId });
    const spy = jest.spyOn(store, 'dispatch');
    
    component.onSelect(mockContactId);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
