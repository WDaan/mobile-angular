import { NgModule } from '@angular/core'
import { HomeComponent } from './home/home.component'
import { CoreModule } from '../core/core.module'

@NgModule({
    imports: [CoreModule],
    providers: [],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class PagesModule { }
