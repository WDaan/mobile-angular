import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import IndexedDb from './indexdb'
@Injectable({
    providedIn: 'root'
})
export class SettingService {

    private darkMode = new BehaviorSubject<boolean>(true)
    private pageSize = new BehaviorSubject<number>(9)
    private showStats = new BehaviorSubject<boolean>(true)

    private db: IndexedDb;

    constructor() {
        this.setup()
    }

    async setup() {
        this.db = new IndexedDb('poke');
        await this.db.createObjectStore(['settings']);
        const settings = await this.db.getValue('settings', 1);
        if (settings) {
            this.darkMode.next(settings.darkMode)
            this.pageSize.next(settings.pageSize || 9)
            this.showStats.next(settings.showStats)
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

    getShowStats(): Observable<boolean> {
        return this.showStats.asObservable()
    }

    toggleShowStats(): void {
        this.showStats.next(!this.showStats.getValue())
        this.saveSettings()
    }

    async saveSettings(): Promise<any> {
        await this.db
            .putValue('settings',
                {
                    id: 1,
                    darkMode: this.darkMode.getValue(),
                    pageSize: this.pageSize.getValue(),
                    showStats: this.showStats.getValue()
                }
            )
    }
}