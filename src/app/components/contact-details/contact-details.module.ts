import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetailsComponent } from './contact-details.component';

@NgModule({
  declarations: [
    ContactDetailsComponent
  ],
  exports: [
    ContactDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactDetailsModule { }
