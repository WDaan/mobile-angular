import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { ListComponent } from './list/list.component'

@NgModule({
    declarations: [ListComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        BrowserModule
    ],
    exports: [ListComponent]
})
export class ComponentsModule { }
