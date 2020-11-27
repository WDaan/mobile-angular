import { Component } from '@angular/core'
import { SettingService } from './core/setting.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'mobile-angular'
    darkMode: boolean = false

    constructor(private settingsService: SettingService) {
        this.darkMode = this.settingsService.getTheme()
        console.log(this.darkMode)
    }

}
