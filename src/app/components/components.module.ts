import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { NgxPaginationModule } from 'ngx-pagination'

import { ListComponent } from './list/list.component'
import { SpinnerComponent } from './spinner/spinner.component';
import { SearchComponent } from './search/search.component'


@NgModule({
    declarations: [ListComponent, SpinnerComponent, SearchComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        BrowserModule,
        NgxPaginationModule,
        RouterModule,
        FormsModule
    ],
    exports: [ListComponent, SpinnerComponent, SearchComponent]
})
export class ComponentsModule { }
