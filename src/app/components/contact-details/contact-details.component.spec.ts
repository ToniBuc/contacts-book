import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailsComponent } from './contact-details.component';
import { CommonModule } from '@angular/common';
import { contactReducer } from '../../state/contact.reducer';
import { StoreModule } from '@ngrx/store';
import { Contact } from '../../state/contact.model';

describe('ContactDetailsComponent', () => {
  let component: ContactDetailsComponent;
  let fixture: ComponentFixture<ContactDetailsComponent>;

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
      declarations: [ContactDetailsComponent],
      imports: [
        CommonModule,
        StoreModule.forRoot({contacts: contactReducer}, {initialState: {contacts : mockInitialStateWithContacts}})
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select selectedContact from the store', () => {
    let selectedContact: Contact | null = null;
    component.selectedContact$.subscribe(contact => {
      selectedContact = contact;
    })

    expect(selectedContact!).toEqual(mockInitialStateWithContacts.selectedContact);
  });
});
