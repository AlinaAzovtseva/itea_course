import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NbuService } from './Services/nbu.service'
import { CurrencyFormComponent } from './currency-form/currency-form.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {
@ViewChild(CurrencyFormComponent, { static: false }) currencyFormComponent!: CurrencyFormComponent;

  currency_object: any[] = [{usd: 0, eur: 0}];

  constructor(public api: NbuService) {}

  ngAfterViewInit(): void {
    this.api.getCurrency().then(data => {
      this.currency_object = data;
    });
  }

  convertCurrency(): void {
  	const fromValue = Number(this.currencyFormComponent.my_currency_form.value.from);
	const currencyFrom = this.currencyFormComponent.my_currency_form.value.currencyFrom;
	const currencyTo = this.currencyFormComponent.my_currency_form.value.currencyTo;
  	
  	const rateFrom = this.currency_object.find(currency => currency.cc === currencyFrom)?.rate;
  	const rateTo = this.currency_object.find(currency => currency.cc === currencyTo)?.rate;
  
  	const convertedValue = fromValue * (rateFrom / rateTo);


  	this.currencyFormComponent.my_currency_form.patchValue({ to: convertedValue.toFixed(2) });
  	
  }
}

	 



