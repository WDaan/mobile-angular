import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { NgxPaginationModule } from 'ngx-pagination'

import { ListComponent } from './list/list.component'
import { SpinnerComponent } from './spinner/spinner.component'


@NgModule({
    declarations: [ListComponent, SpinnerComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        BrowserModule,
        NgxPaginationModule
    ],
    exports: [ListComponent, SpinnerComponent]
})
export class ComponentsModule { }
