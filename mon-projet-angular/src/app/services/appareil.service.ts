import { Subject } from "rxjs/internal/Subject";

export class AppareilService {

    appareilSubject = new Subject<any[]>();

    private appareils = [
        {
            id: 1,
            name: 'Machine à laver issu du service',
            status: 'allumé'
        },
        {
            id:2,
            name: 'Télévision issue du service',
            status: 'éteint'
        },
        {
            id:3,
            name: 'Ordinateur issu du service',
            status: 'allumé'
        },
        {
            id:4,
            name: 'Climatisation issue du service ',
            status: 'allumé'
        },
    ];

    emitAppareilSubject(){
        // slice renvoi une copie du tableau
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
        appareilObjectToAdd.id = this.appareils[(this.appareils.length-1)].id+1;
        appareilObjectToAdd.name = name;
        appareilObjectToAdd.status = status;
        // Ajout du nouvel appareil
        this.appareils.push(appareilObjectToAdd);
        // emission du subject puisque ya eu un changement
        this.emitAppareilSubject();
        
    }
}