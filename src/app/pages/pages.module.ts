import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home/home.component'
import { CoreModule } from '../core/core.module'
import { NotFoundComponent } from './not-found/not-found.component'
import { DetailComponent } from './detail/detail.component'
import { ComponentsModule } from '../components/components.module'
import { SettingsComponent } from './settings/settings.component'

@NgModule({
    imports: [BrowserModule, CommonModule, CoreModule, ComponentsModule],
    providers: [],
    declarations: [HomeComponent, NotFoundComponent, DetailComponent, SettingsComponent],
    exports: [HomeComponent]
})
export class PagesModule { }
