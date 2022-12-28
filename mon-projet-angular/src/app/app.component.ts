import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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

  onAllumer(){
    this.appareilService.switchOnAll();
  }

  onEteindre(){
    this.appareilService.switchOffAll();
  }

}
