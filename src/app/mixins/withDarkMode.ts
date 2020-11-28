import { SettingService } from '../core/setting.service'

type Constructor<T> = new (...args: any[]) => T

export function withDarkMode<T extends Constructor<{}>>(Base: T = (class { } as any)): any {
    return class extends Base {
        darkMode: boolean
        constructor(...args: any[]) {
            super(args)
            const settingsService: SettingService = args[0]
            settingsService.getTheme().subscribe(newTheme => {
                this.darkMode = newTheme
            })
        }
    }
}
