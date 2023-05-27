import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NbuService {

currency_object = [{}]

   constructor(public http: HttpClient) {}

 getCurrency(): Promise<any[]> {
  return this.http.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
  .toPromise().then(data => data as any[]);
	
  }
}
