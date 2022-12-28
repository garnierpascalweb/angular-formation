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
}
