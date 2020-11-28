import { Component, OnInit } from '@angular/core'
import { SettingService } from 'src/app/core/setting.service'
import { withDarkMode } from 'src/app/mixins/withDarkMode'
@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent extends withDarkMode() implements OnInit {
    pageSize: number
    showStats: boolean

    constructor(private settingsService: SettingService) {
        super(settingsService)
        this.settingsService.getPageSize().subscribe(newPageSize => {
            this.pageSize = newPageSize
        })
        this.settingsService.getShowStats().subscribe(newShowStats => {
            this.showStats = newShowStats
        })
    }

    ngOnInit(): void { }

    toggleDarkMode(): void {
        this.settingsService.toggleTheme()
    }

    toggleShowStats(): void {
        this.settingsService.toggleShowStats()
    }

    changePageSize(value: number): void {
        this.settingsService.setPageSize(value)
    }
}
