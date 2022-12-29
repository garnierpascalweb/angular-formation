import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  /**
   * Objet formulaire qui correspond au formulaire dans le template
   */
  userForm: FormGroup;

  /**
   * injection de formBuilder
   * @param formBuilder permet de creer des objets de formulaire plus facilement, de maniere plus lisible
   */
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.userForm = this.formBuilder.group({}); 
  }

  ngOnInit(): void {
    // initialisation du formulaire
    this.initForm();
  }

  /**
   * initialisation du formulaire
   */
  initForm() {
    // group est une methode qui retourne un FormGroup
    // on declare et initialise les champs 
    // pour chaque champ un tableau
    //  valeur par defaut
    //  [] (tableau de Validators ou Validator tout seul)    
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      drinkPreference: ['', Validators.required]
      //hobbies: this.formBuilder.array([])
    });
  }

  /**
   * soumission du formulaire
   */
  onSubmitForm(){
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPreference'],
      // hobbies peut etre vide, la syntaxe ci dessous dit le tableau dhobbies sinon un tableau vide
      //formValue['hobbies'] ? formValue['hobbies'] : []
    );
    // Ajout du user a laide du service
    this.userService.addUser(newUser);
    // navigation vers la page des users 
    this.router.navigate(['/users']);
    //TODO et comment catcher que ca plante ?

  }

}
