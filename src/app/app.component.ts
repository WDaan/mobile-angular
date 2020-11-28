import { Component } from '@angular/core'
import { SettingService } from './core/setting.service'
import { withDarkMode } from './mixins/withDarkMode'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent extends withDarkMode() {
    title = 'mobile-angular'

    constructor(private settingsService: SettingService) {
        super(settingsService)
    }
}
