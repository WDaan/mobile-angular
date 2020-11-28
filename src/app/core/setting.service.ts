import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class SettingService {

    private darkMode = new BehaviorSubject<boolean>(true)
    private pageSize = new BehaviorSubject<number>(9)

    constructor() {
        const settings = JSON.parse(localStorage.getItem('settings'))
        if (settings) {
            this.darkMode.next(settings.darkMode)
            this.pageSize.next(settings.pageSize || 9)
        }
    }

    getTheme(): Observable<boolean> {
        return this.darkMode.asObservable()
    }

    toggleTheme(): void {
        this.darkMode.next(!this.darkMode.getValue())
        this.saveSettings()
    }

    getPageSize(): Observable<number> {
        return this.pageSize.asObservable()
    }

    setPageSize(value: number): void {
        this.pageSize.next(value)
        this.saveSettings()
    }

    saveSettings(): void {
        localStorage.setItem('settings',
            JSON.stringify(
                {
                    darkMode: this.darkMode.getValue(),
                    pageSize: this.pageSize.getValue()
                })
        )
    }
}
