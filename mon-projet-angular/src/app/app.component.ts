import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my awesone app';
  /**
   * Booleen - est authentifié
   */
  isAuth = false;
  //appareilOne = 'MAchine a laver du ts';
  //appareilTwo = 'Télévision du ts';
  //appareilThree = 'Ordinateur du ts';

  appareils = [
    {
      name: 'Machine à laver',
      status: 'allumé'
    },
    {
      name: 'Télévision',
      status: 'éteint'
    },
    {
      name: 'Ordinateur',
      status: 'allumé'
    },
    {
      name: 'Climatisation',
      status: 'allumé'
    },
  ]

  /**
   * Executé au moment de la cration du component
   */
  constructor(){
    setTimeout (
      () => {
        this.isAuth  = true
      }, 4000
    )
  };

  onAllumer(){
    
  }

}
