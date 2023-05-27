import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CurrencyHeaderComponent } from './currency_header/currency_header.component';
import { CurrencyFormComponent } from './currency-form/currency-form.component';
import { BoldItalicPipe } from './bold-italic.pipe'


@NgModule({
  declarations: [
    AppComponent,
    CurrencyHeaderComponent,
    CurrencyFormComponent,
    BoldItalicPipe,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
