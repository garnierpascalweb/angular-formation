/**
 * Modele utilisateur
 * Simple Bean
 */
export class User {
    // le fait de declarer public les arguments permet d'éviter leur declaration (raccourci typescript)
    // pour hobbies le ? permet de dire facultatif
    constructor (public firstName: string,public lastName: string,public email: string,public drinkPreference:string, public hobbies? : string[]){

    }
}