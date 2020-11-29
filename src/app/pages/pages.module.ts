import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'

import { HomeComponent } from './home/home.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { DetailComponent } from './detail/detail.component'
import { ComponentsModule } from '../components/components.module'
import { SettingsComponent } from './settings/settings.component'


@NgModule({
    imports: [ComponentsModule, CommonModule, BrowserModule],
    providers: [],
    declarations: [HomeComponent, NotFoundComponent, DetailComponent, SettingsComponent],
    exports: [HomeComponent]
})
export class PagesModule { }
