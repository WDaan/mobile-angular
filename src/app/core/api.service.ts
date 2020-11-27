import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    readonly rootURL = 'https://pokeapi.co/api/v2/pokemon'
    readonly imageURL: string = 'https://pokeres.bastionbot.org/images/pokemon/'


    constructor(private http: HttpClient) { }


    getPokemon(offset: number, limit: number) {
        return this.http.get(`${this.rootURL}?offset=${offset}&limit=${limit}`)
            .toPromise()
            .then(response => JSON.parse(JSON.stringify(response)).results)
            .then(items => items.map((item, idx) => {
                const id: number = idx + offset + 1
                return {
                    name: item.name,
                    url: `${this.imageURL}${id}.png`,
                    id
                }
            }))
    }
}
