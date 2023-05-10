import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {

	title:string = 'Currency Converter'
	currency = {
		usd: 36.77,
		eur: 40.38,
	}
}
