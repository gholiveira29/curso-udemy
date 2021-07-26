import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './mterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonComponent } from './person/person.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule, 
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot( appReducers )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
