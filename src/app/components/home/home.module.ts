import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ContactListModule } from '../contact-list/contact-list.module';
import { ContactDetailsModule } from '../contact-details/contact-details.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ContactListModule,
    ContactDetailsModule,
  ]
})
export class HomeModule { }
