import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormComponent } from './contact-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { contactReducer } from '../../state/contact.reducer';
import { Store, StoreModule } from '@ngrx/store';
import { addContact } from '../../state/contact.actions';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  let store: Store;

  const mockContact = {
    id: '4',
    firstName: 'Jest',
    lastName: 'Test',
    phone: '111111111',
    email: 'placeholder4@placeholder.com',
    address: 'random address 000'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactFormComponent],
      imports: [
        CommonModule,
        FormsModule,
        StoreModule.forRoot({contacts: contactReducer})
      ]
    })
    .compileComponents();

    store = TestBed.inject(Store);

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onSubmit, store should dispatch addContact action', () => {
    component.contactData = mockContact;
    const action = addContact({ contact: component.contactData});
    const spy = jest.spyOn(store, 'dispatch');

    const mockNgForm: any = {
      resetForm: jest.fn()
    }
    
    component.onSubmit(mockNgForm);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
