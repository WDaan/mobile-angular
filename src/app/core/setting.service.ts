import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SettingService {

    private darkMode: boolean = true

    constructor() { }


    getTheme() {
        return this.darkMode
    }
}
