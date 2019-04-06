import { Component, OnInit, OnDestroy } from '@angular/core';

import { AppareilService } from './services/appareil.service';


import { Observable } from 'rxjs/Rx'
import { Subscription } from 'rxjs/Subscription'
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  secondes: number;
  counterSubscription: Subscription;

  constructor() {
    
  }

  ngOnInit() {
  	const counter = Observable.interval(1000);

  	this.counterSubscription = counter.subscribe(
  		(value: number) => {
  			this.secondes = value;
  		}
	);
  }

  ngOnDestroy() {
  	this.counterSubscription.unsubscribe();
  }

}

