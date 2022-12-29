import { Subject } from "rxjs/internal/Subject";
import { User } from "../models/user.model";


/**
 * Service pour les utilisateurs
 */
export class UserService {

    /**
     * Les users vehicules par le service
     */
    private users: User[];
    /**
     * pattern avec subject
     */
    userSubject = new Subject<User[]>();

    constructor() {
        this.users = [{
            firstName: "Kilian",
            lastName: "Mbappe",
            email: "mbappe7@psg.fr",
            drinkPreference: "eau",
            hobbies: ["football", "100metres"]
        }, {
            firstName: "Jr",
            lastName: "Neymar",
            email: "neymar10@psg.fr",
            drinkPreference: "vodka",
            hobbies: ["poker", "farniente", "soirees"]
        }]
    }

    /**
     * la bonne pratique dans tout service semble l'utilisation d'un subject, averc une methode emit() qui fait un next sur le subject avec les donnees locales
     * cette methode emit doit etre appelée a chaque changement
     */
    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    /**
     * methode permettant d'ajouter un user
     * @param user 
     */
    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }

}