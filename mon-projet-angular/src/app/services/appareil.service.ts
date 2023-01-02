import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/internal/Subject";

// injectable depuis linjection de HttpClient
@Injectable()
export class AppareilService {

    appareilSubject = new Subject<any[]>();


    private appareils : any[];

    constructor (private httpClient : HttpClient ){
        this.appareils = [];
    }

    emitAppareilSubject(){
        // slice renvoi une copie du tableau
        if (this.appareils)
        this.appareilSubject.next(this.appareils.slice());
    }

    /**
     * methode permettant de rendre un appareil par son id
     * @param id de l'appareil arendre
     */
    getAppareilById(id: number){
        const appareil = this.appareils.find(
            (appareilOjbect) => {
                return appareilOjbect.id === id;
            }
        );
        return appareil;
    }

    /**
     * methode permettant d'allumer tous les appareils
     */
    switchOnAll() {
        for (let appareil of this.appareils){
           appareil.status = 'allumé';
           //appareil['status'] = 'allumé';
        }
        this.emitAppareilSubject();
    }

    /**
     * methode permettant d'éteindre tous les appareils
     */
    switchOffAll() {
        for (let appareil of this.appareils){
            appareil.status = 'éteint';
        }
        this.emitAppareilSubject();
    }

    /**
     * Permet d'allumer un appareil 
     * @param index  de l'appareil a allumer
     */
    switchOn(index: number){
        this.appareils[index].status = 'allumé';
        this.emitAppareilSubject();
    }

    /**
     * Permet d'éteindre un appareil
     * @param index  de l'appareil a eteindre
     */
    switchOff(index: number){
        this.appareils[index].status = 'éteint';
        this.emitAppareilSubject();
    }

    /**
     * methode permettant l'ajour d'un appareil a la liste
     * @param name  le nom du nouvel appareil
     * @param status le status du nouvel appareil
     */
    addAppareil(name: string, status:string){
        const appareilObjectToAdd = {
            id:0,
            name:'',
            status:''
        };
        // calcul de l'ID : le dernier de la liste, plus un (peut etre ignoré et géré par le sgbd en auto incrtement dans un vrai projet)
        if (this.appareils.length)
            appareilObjectToAdd.id = this.appareils[(this.appareils.length-1)].id+1;
        else appareilObjectToAdd.id = this.appareils[0].id+1;
        appareilObjectToAdd.name = name;
        appareilObjectToAdd.status = status;
        // Ajout du nouvel appareil
        this.appareils.push(appareilObjectToAdd);
        // emission du subject puisque ya eu un changement
        this.emitAppareilSubject();        
    }

    /**
     * Chargement des données depuis le backend (http GET)
     */
    load(){
        this.httpClient
        // on peut caster le type de retour d'un get, ici un array de type any, cela evite une erreur typescript lors du  this.appareils = response;
        .get<any[]>('https://mon-projet-angular-30f14-default-rtdb.firebaseio.com/appareils.json')
        // get re
        .subscribe(
            (response) => {
                this.appareils = response;
                console.log('ok lors du load - emit');
                this.emitAppareilSubject();
            },            
            (error) => {
               console.log('erreur de chargement');
            }
        );    
    }

    /**
     * Sauvegarde des données sur le backend (http PUT)
     */
    save(){
        // POST : url, data, eventuellement options      
        // on rajoute appareils.json dans l'url
        this.httpClient
        .put('https://mon-projet-angular-30f14-default-rtdb.firebaseio.com/appareils.json',this.appareils)
        // put renvoi un iobservable, 
        // j'y souscris
        .subscribe(
            ()=>{
                // appel ok
                console.log('ok lors du save');
            },
            (error)=>{
                console.log('erreur lors du save' + typeof(error));
            }
        );
    }

    delete(){
        this.httpClient
        .delete('https://mon-projet-angular-30f14-default-rtdb.firebaseio.com/appareils.json')
        .subscribe(
            ()=>{
                console.log('ok lors du delete - emit');
                this.emitAppareilSubject();
            },
            (error)=>{
                console.log('erreur lors du delete' + typeof(error));
            }
        )
    }
}