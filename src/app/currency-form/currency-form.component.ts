import { Component, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
 

@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.css']
})
export class CurrencyFormComponent implements AfterViewInit {

  @Input() currencyObject: any[] = [{usd: 0, eur: 0}];
  @Input() currency: any;
  @Input() currencyFormComponent: any;
  @Output() convertClicked: EventEmitter<void> = new EventEmitter<void>();

  inputValue: string = '';

  my_currency_form: FormGroup = new FormGroup({
  	from: new FormControl("0",[
  		Validators.required,
  		Validators.minLength(1),
  		Validators.pattern(/^\d+$/)
  		]),
  	to: new FormControl("0"),
  	currencyTo: new FormControl(),
  	currencyFrom: new FormControl()
  })

  saveData() {
    localStorage.setItem('key', this.my_currency_form.value.from);
  }

  ngAfterViewInit(): void {
  const storedValue = localStorage.getItem('key');
  if (storedValue) {
    this.inputValue = storedValue;
    this.my_currency_form.patchValue({ from: storedValue });
  }
  
}

}
