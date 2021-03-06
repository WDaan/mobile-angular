import { Component, OnInit } from '@angular/core'
import { ApiService } from 'src/app/core/api.service'
import { SettingService } from 'src/app/core/setting.service'
import { withDarkMode } from 'src/app/mixins/withDarkMode'

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class ListComponent extends withDarkMode() implements OnInit {
    page = 1
    pageSize: number
    total: number
    data = []
    loading = true

    constructor(private apiService: ApiService, private settingsService: SettingService) {
        super(settingsService)
        this.settingsService.getPageSize().subscribe(newPageSize => {
            this.pageSize = newPageSize
        })
    }

    ngOnInit(): void {
        this.getPage(this.page)
    }

    getPage(page: number): void {
        this.loading = true
        this.apiService.getPage(page).then(res => {
            this.data = res.results
            this.total = res.count
            this.page = page
            this.loading = false
        })
    }
}
