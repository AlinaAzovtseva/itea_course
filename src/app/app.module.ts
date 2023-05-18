import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
