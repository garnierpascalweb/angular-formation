import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  // appareilName = 'Machine a laver';
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() appareilIndex: number;

  constructor(private appareilService : AppareilService) { 
    this.appareilIndex = -1;
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

  /**
   * allumer l'appareil
   */
  onSwitchOn(){
    this.appareilService.switchOn(this.appareilIndex);
  }

  /**
   * eteindre l'appareil
   */
  onSwitchOff(){
    this.appareilService.switchOff(this.appareilIndex);
  }
}
