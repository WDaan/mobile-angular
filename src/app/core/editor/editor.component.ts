import { Component, OnInit } from '@angular/core'
import { LanguageService } from '../language.service'

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
    editorModes = []
    selectedEditorMode = 'javascript'
    value = `function testThis() {
    console.log("it's working!")
}`

    editorOptions = {
        lineNumbers: true,
        theme: 'dracula',
        mode: 'javascript'
    }

    constructor(private languageService: LanguageService) { 
        this.editorModes = this.languageService.getLanguages();
    }

    ngOnInit() {

    }

    changeMode() {
        this.editorOptions.mode = this.selectedEditorMode
    }
}
