import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.css']
})
export class CurrencyFormComponent implements OnInit {

  @Input() currency: any;

  inputValue: string = '';

  saveData() {
    localStorage.setItem('key', this.inputValue);
  }

  ngOnInit() {
    const storedValue = localStorage.getItem('key');
    if (storedValue) {
      this.inputValue = storedValue;
    }
  }	
}
