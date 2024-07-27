import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormComponent } from './contact-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { contactReducer } from '../../state/contact.reducer';
import { StoreModule } from '@ngrx/store';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

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

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
