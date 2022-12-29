/**
 * Service permettant de gérer l'authentification
 * 
 */
export class AuthService {
    /**
     * Booleen permettant de dire si l'utilisateur est authentifié ou pas
     */
    isAuth = false;

    /**
     * Connexion de l'utilisateur
     * Simulation d'une reponse dans 4000 ms en disant ok
     * Bonne grosse syntaxe de merde
     */
    signIn() {
        return new Promise(
            (resolve, reject) => {
                setTimeout(
                    () => {
                        this.isAuth = true;
                        resolve(true);
                    }, 4000
                );
            }
        );
    }

    /**
     * Deconnexion de l'utilisateur
     */
    signOut(){
        this.isAuth = false;
    }
}