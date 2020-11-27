import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    readonly rootURL = 'https://pokeapi.co/api/v2/pokemon'
    readonly imageURL: string = 'https://pokeres.bastionbot.org/images/pokemon/'
    private perPage = 9

    constructor(private http: HttpClient) { }


    getPage(page: number) {
        const start = (page - 1) * this.perPage
        return this.http.get(`${this.rootURL}?offset=${start}&limit=${this.perPage}`)
            .toPromise()
            .then((res: any) => {
                const { count, results } = res
                const formatted = results.map((item, idx) => {
                    const id = item.url.match(/\/pokemon\/(\d+)\//)[1]
                    return {
                        name: item.name,
                        url: `${this.imageURL}${id}.png`,
                        id
                    }
                })
                return {
                    count, results: formatted
                }
            })
    }

    getDetail(id: string) {
        return this.http.get(`${this.rootURL}/${id}`)
            .toPromise()
            .then((res: any) => {
                const id = res.species.url.match(/\/pokemon-species\/(\d+)\//)[1]
                return {
                    ...res, url: `${this.imageURL}${id}.png`
                }
            })
    }

    getPerPage() {
        return this.perPage
    }
}
