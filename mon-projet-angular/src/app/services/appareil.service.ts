export class AppareilService {
    appareils = [
        {
            name: 'Machine à laver issu du service',
            status: 'allumé'
        },
        {
            name: 'Télévision issue du service',
            status: 'éteint'
        },
        {
            name: 'Ordinateur issu du service',
            status: 'allumé'
        },
        {
            name: 'Climatisation issue du service ',
            status: 'allumé'
        },
    ];

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