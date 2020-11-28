import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class SettingService {

    private _darkMode = new BehaviorSubject<boolean>(true)
    private _pageSize = new BehaviorSubject<number>(9)

    constructor() {
        const settings = JSON.parse(localStorage.getItem('settings'))
        if (settings) {
            this._darkMode.next(settings.darkMode)
            this._pageSize.next(settings.pageSize || 9)
        }
    }

    getTheme() {
        return this._darkMode.asObservable()
    }

    toggleTheme() {
        this._darkMode.next(!this._darkMode.getValue())
        this.saveSettings()
    }

    getPageSize() {
        return this._pageSize.asObservable()
    }

    setPageSize(value: number) {
        this._pageSize.next(value)
        this.saveSettings()
    }

    saveSettings() {
        localStorage.setItem('settings',
            JSON.stringify(
                {
                    darkMode: this._darkMode.getValue(),
                    pageSize: this._pageSize.getValue()
                })
        )
    }
}
