export default class RequestUtil {

    static async getAll() {
        const response = await fetch('https://swapi.co/api/')
        return await response.json()
    }

    static async request(url) {
        const response = await fetch(url)
        return await response.json()
    }

}