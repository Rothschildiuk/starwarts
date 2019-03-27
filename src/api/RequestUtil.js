export default class RequestUtil {

    static async getAll() {
        const respons = await fetch('https://swapi.co/api/')
        return await respons.json()
    }

    static async getPeoples() {

        return await fetch('https://swapi.co/api/people/')
    }

    static async getPlanets() {

        return await fetch('https://swapi.co/api/planets/')
    }

}