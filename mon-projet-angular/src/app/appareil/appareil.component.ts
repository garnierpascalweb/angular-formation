import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  // appareilName = 'Machine a laver';
  @Input() appareilName: string;
  @Input() appareilStatus: string;

  constructor() { 
    this.appareilName='';
    this.appareilStatus = '';
  }

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus;
  }

  getColor(){
    if (this.appareilStatus === 'éteint'){
      return 'red';
    } else {
      return 'green';
    }
  }

 

}
