import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
 

@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.css']
})
export class CurrencyFormComponent implements OnInit {

  @Input() currency: any;
  inputValue: string = '';

  my_currency_form: FormGroup = new FormGroup({
  	from: new FormControl("0",[
  		Validators.required,
  		Validators.minLength(1),
  		Validators.pattern(/^\d+$/)
  		]),
  	to: new FormControl("0"),
  })

  saveData() {
    localStorage.setItem('key', this.my_currency_form.value.from);
  }

  ngOnInit() {
    const storedValue = localStorage.getItem('key');
    if (storedValue) {
      this.inputValue = storedValue;
      this.my_currency_form.patchValue({ from: storedValue });
    }
  }	
}
