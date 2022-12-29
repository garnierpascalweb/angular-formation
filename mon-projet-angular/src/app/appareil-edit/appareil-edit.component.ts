import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-edit',
  templateUrl: './appareil-edit.component.html',
  styleUrls: ['./appareil-edit.component.scss']
})
export class AppareilEditComponent implements OnInit {

  defaultStatus: string;
  constructor(private appareilService : AppareilService, private router : Router) {
    this.defaultStatus = 'éteint';
   }

  ngOnInit(): void {

  }

  /**
   * Soumission du formulaire (par par un clock sur le bouton, mais par la soumission du formulaire)
   * @param form parametre NgForm parce que dans le html on a dit que notre formulaire appelé f est de type ngForm
   */
  onSubmit(form: NgForm){
    // console.log('valeur du formulaire ' + form);
    const name = form.value['name'];
    const status = form.value['status'];
    this.appareilService.addAppareil(name, status);
    this.router.navigate(['appareils']);
  }

}
