import { Component, OnInit } from '@angular/core'
import { SettingService } from 'src/app/core/setting.service'
import { withDarkMode } from 'src/app/mixins/withDarkMode'
@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent extends withDarkMode() implements OnInit {
    constructor(private settingsService: SettingService) {
        super(settingsService)
    }

    ngOnInit(): void {

    }

    toggleDarkMode() {
        this.settingsService.toggleTheme()
    }

}
