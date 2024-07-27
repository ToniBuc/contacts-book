import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { ContactListModule } from '../contact-list/contact-list.module';
import { ContactDetailsModule } from '../contact-details/contact-details.module';
import { StoreModule } from '@ngrx/store';
import { contactReducer } from '../../state/contact.reducer';
import { RouterModule } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        CommonModule,
        ContactListModule,
        ContactDetailsModule,
        RouterModule.forRoot([]),
        StoreModule.forRoot({contacts: contactReducer})
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
