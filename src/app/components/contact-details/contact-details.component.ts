import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSelectedContact } from '../../state/contact.selectors';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactDetailsComponent {
  public selectedContact$ = this.store.select(selectSelectedContact);

  constructor(private store: Store) {}
}
