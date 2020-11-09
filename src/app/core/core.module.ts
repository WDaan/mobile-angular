import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

import { EditorComponent } from './editor/editor.component'


import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { LanguageService } from './language.service';



@NgModule({
    imports: [CodemirrorModule, CommonModule, FormsModule],
    providers: [LanguageService],
    declarations: [EditorComponent],
    exports: [EditorComponent]
})
export class CoreModule { }
