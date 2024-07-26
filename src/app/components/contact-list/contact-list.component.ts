import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllContacts, selectSelectedContact } from '../../state/contact.selectors';
import { selectContact } from '../../state/contact.actions';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent {
  public contacts$ = this.store.select(selectAllContacts);
  public selectedContact$ = this.store.select(selectSelectedContact);

  constructor(private store: Store) {}

  onSelect(contactId: string): void {
    this.store.dispatch(selectContact({contactId: contactId}));
  }
}
