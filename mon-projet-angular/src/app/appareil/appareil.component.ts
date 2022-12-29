import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  // appareilName = 'Machine a laver';
  /**
   * Nom de l'appareil
   */
  @Input() appareilName: string;
  /**
   * Status de l'appareil
   */
  @Input() appareilStatus: string;
  /**
   * Index dans un tableau retour de l'appareil
   */
  @Input() appareilIndex: number;
  /**
   * Id de l'appareil (cle primaire en table)
   */
  @Input() appareilId: number;

  constructor(private appareilService : AppareilService) { 
    this.appareilIndex = -1;
    this.appareilName='';
    this.appareilStatus = '';
    this.appareilId = -1;
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
