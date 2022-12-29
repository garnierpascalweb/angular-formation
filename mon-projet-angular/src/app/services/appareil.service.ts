export class AppareilService {
    appareils = [
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
    }

    /**
     * methode permettant d'éteindre tous les appareils
     */
    switchOffAll() {
        for (let appareil of this.appareils){
            appareil.status = 'éteint';
        }
    }

    /**
     * Permet d'allumer un appareil 
     * @param index  de l'appareil a allumer
     */
    switchOn(index: number){
        this.appareils[index].status = 'allumé';
    }

    /**
     * Permet d'éteindre un appareil
     * @param index  de l'appareil a eteindre
     */
    switchOff(index: number){
        this.appareils[index].status = 'éteint';
    }
}