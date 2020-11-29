import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { DetailComponent } from './pages/detail/detail.component'
import { SettingsComponent } from './pages/settings/settings.component'

import { PagesModule } from './pages/pages.module'


const routes: Routes = [
    { path: 'detail/:id', component: DetailComponent },
    { path: 'settings', component: SettingsComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: NotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes), PagesModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }
