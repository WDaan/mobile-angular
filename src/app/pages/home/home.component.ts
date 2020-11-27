import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../core/api.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    data = []

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.fetchData()
    }

    fetchData() {
        this.apiService.getPokemon(0, 10).then(res => {
            this.data = res
            console.log(res)
        })
    }
}
