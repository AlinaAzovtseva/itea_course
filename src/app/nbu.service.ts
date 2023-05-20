import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NbuService {

currency_object = [{
		'rate': 36.77,'txt':'usd'
	},{
		'rate': 40.38,'txt':'eur'
	},{
		'rate': 8.83,'txt':'pln'
	}]

   constructor(public http: HttpClient) {}

 getCurrency(){
  return this.http.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
  // .subscribe(data=> console.log(data))
	
  }
}
