import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  /**
   * Status d'authentification de l'utilisateur
   */
  authStatus: boolean;

  constructor(private authService : AuthService) {
    this.authStatus = false;
   }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

  /**
   * methode appelée sur le click du bouton 'se connecter'
   * signIn cest asynchrone, renvoi une promesse
   */
  onSignIn(){
    this.authService.signIn().then(
      ()=>{
        // connexion reussie
        this.authStatus = this.authService.isAuth;
      },
      () => {
        // connexion echouee
        this.authStatus = this.authService.isAuth;
      }
    );
  }

  onSignOut(){
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
