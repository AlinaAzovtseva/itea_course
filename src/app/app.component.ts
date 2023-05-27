import { Component, AfterViewInit } from '@angular/core';
import { NbuService } from './Services/nbu.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  currency_object: any[] = [{usd: 0, eur: 0}];

  constructor(public api: NbuService) {}

  ngAfterViewInit(): void {
    this.api.getCurrency().subscribe(data => this.currency_object = data as any[]);
  }
}

	 



