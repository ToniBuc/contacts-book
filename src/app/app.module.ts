import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { contactReducer } from './state/contact.reducer';
import { HomeModule } from './components/home/home.module';
import { ContactFormModule } from './components/contact-form/contact-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ContactFormModule,
    StoreModule.forRoot({contacts: contactReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
