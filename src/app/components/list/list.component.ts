import { Component, OnInit } from '@angular/core'
import { ApiService } from 'src/app/core/api.service'

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    page = 1
    perPage = 9
    total: number
    data = []
    loading = true

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.getPage(this.page)
    }

    getPage(page: number) {
        this.loading = true
        this.apiService.getPage(page).then(res => {
            this.data = res.results
            this.total = res.count
            this.page = page
            this.loading = false
        })
    }
}
