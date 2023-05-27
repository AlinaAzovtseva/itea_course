import { Component } from '@angular/core';
import { NbuService } from './nbu.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
	
	currency_object: any[] = [{usd:0, eur:0}];

	 constructor(public api: NbuService){
	 	this.api.getCurrency().subscribe(data=>this.currency_object = data as any[])
	 }

	 
}


