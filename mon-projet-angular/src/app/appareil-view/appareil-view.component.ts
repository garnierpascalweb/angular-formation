import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
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
  appareilSubscription: Subscription;


  /**
   * Executé au moment de la cration du component
   * Injection de appareilService, du coup on peut l'appeler de partout via this.appareilService
   */
  constructor( private appareilService : AppareilService ){
    this.appareils = [];
    this.appareilSubscription = new Subscription();
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
    // marche plus depuis que passé en private this.appareils = this.appareilService.appareils;
    // souscription au subject du service
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils : any[]) => {
         this.appareils = appareils;
      }
    );
    // faire emettre le subject
    this.appareilService.emitAppareilSubject();
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
