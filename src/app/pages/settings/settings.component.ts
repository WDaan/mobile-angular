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

    constructor(private settingsService: SettingService) {
        super(settingsService)
        this.settingsService.getPageSize().subscribe(newPageSize => {
            this.pageSize = newPageSize
        })
    }

    ngOnInit(): void {
        console.log(this.pageSize)
    }

    toggleDarkMode() {
        this.settingsService.toggleTheme()
    }

    changePageSize(value: number) {
        this.settingsService.setPageSize(value)
    }

}
