import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import '@angular/compiler'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'

if (environment.production) {
    enableProdMode()
}

/** import languages */


platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err))
