import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class SettingService {

    private _darkMode = new BehaviorSubject(true)

    constructor() {
        const settings = JSON.parse(localStorage.getItem('settings'))
        if (settings) {
            this._darkMode.next(settings.darkMode)
        }
    }

    getTheme() {
        return this._darkMode.asObservable()
    }

    toggleTheme() {
        this._darkMode.next(!this._darkMode.getValue())
        this.saveSettings()
    }

    saveSettings() {
        localStorage.setItem('settings', JSON.stringify({ darkMode: this._darkMode.getValue() }))
    }
}
