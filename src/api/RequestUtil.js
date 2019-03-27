export default class RequestUtil {

    static async getPeoples() {

        return await fetch( 'https://swapi.co/api/people/', {
            method: 'GET'
        });
    }

    static async getPlanets() {

        return await fetch( 'https://swapi.co/api/planets/', {
            method: 'GET'
        });
    }

}