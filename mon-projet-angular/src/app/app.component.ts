import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Observable } from 'rxjs'

import { AppareilService } from './services/appareil.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy  {
  
  /**
   * le nombre de secondes depuis lesquelles l'utilisateur est connecte
   */
  connectedTime : number;
  counterSubscription : Subscription;

  constructor(){
    this.connectedTime = -1;
    this.counterSubscription = new Subscription();
  }


  ngOnInit(): void {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value: number) => {
        this.connectedTime = value;
      }
    );
  }

  ngOnDestroy(): void {
    // destruction de la souscription
    // evite les propblemes de comportement infini
    this.counterSubscription.unsubscribe();
  }
}
