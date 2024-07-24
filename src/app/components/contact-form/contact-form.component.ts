import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Contact } from '../../state/contact.model';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { addContact } from '../../state/contact.actions';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFormComponent {
  contactData: Contact = {
    id: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: ''
  }

  constructor(private store: Store) {}

  onSubmit(form: NgForm): void {
    const contact = { ...this.contactData };
    this.store.dispatch(addContact({ contact: contact }));
    form.resetForm();
  }
}
