import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})

/**
 * Composant pour offrir une vue globale des appareils
 */
export class AppareilViewComponent implements OnInit {

  title = 'my awesone app';
  
  /**
   * Booleen - est authentifié
   */
  isAuth = false;
  //appareilOne = 'MAchine a laver du ts';
  //appareilTwo = 'Télévision du ts';
  //appareilThree = 'Ordinateur du ts';

  // lastUpdate = new Date();
  
  lastUpdate = new Promise<Date>(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 5000
      );
    }
  )
  
  appareils: any[];

  /**
   * Executé au moment de la cration du component
   * Injection de appareilService, du coup on peut l'appeler de partout via this.appareilService
   */
  constructor( private appareilService : AppareilService ){
    this.appareils = [];
    setTimeout (
      () => {
        this.isAuth  = true
      }, 4000
    )
  }
  
  /**
   * executee au moment de la creation du component par Angular
   * et apres l'execution du constructor
   */
  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }
;

  /**
   * Permet d'allumer tous les appareils
   */
  onAllumer(){
    this.appareilService.switchOnAll();
  }

  /**
   * Permet d'eteindre tous les appareils
   */
  onEteindre(){
    this.appareilService.switchOffAll();
  }

}
