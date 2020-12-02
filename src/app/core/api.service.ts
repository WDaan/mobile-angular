import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { SettingService } from './setting.service'

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    readonly rootURL = 'https://pokeapi.co/api/v2/pokemon'
    readonly imageURL: string = 'https://pokeres.bastionbot.org/images/pokemon/'
    private pageSize: number

    constructor(private http: HttpClient, private settingsService: SettingService) {
        this.settingsService.getPageSize().subscribe(newPageSize => {
            this.pageSize = newPageSize
        })
    }

    getPage(page: number): Promise<any> {
        const start = (page - 1) * this.pageSize
        return this.http.get(`${this.rootURL}?offset=${start}&limit=${this.pageSize}`)
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

    getDetail(nameOrId: string): Promise<any> {
        return this.http.get(`${this.rootURL}/${nameOrId}`)
            .toPromise()
            .then((res: any) => {
                const id = res.species.url.match(/\/pokemon-species\/(\d+)\//)[1]
                return {
                    ...res, url: `${this.imageURL}${id}.png`
                }
            })
    }
}
