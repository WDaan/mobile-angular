import { Component, OnInit } from '@angular/core'
import { ApiService } from 'src/app/core/api.service'
import { SettingService } from 'src/app/core/setting.service'

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    page = 1
    perPage: number
    total: number
    data = []
    loading = true
    darkMode: boolean

    constructor(private apiService: ApiService, private settingsService: SettingService) {
        this.perPage = this.apiService.getPerPage()
        this.darkMode = this.settingsService.getTheme()
     }

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
