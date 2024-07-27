import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactFormComponent
  ],
  exports: [
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ContactFormModule { }
