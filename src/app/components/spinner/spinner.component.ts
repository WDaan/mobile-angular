import { Component } from '@angular/core'

@Component({
    selector: 'app-spinner',
    template: `
        <div class="loader mx-auto ease-linear rounded-full border-8
            border-t-8 border-gray-200 h-64 w-64">
        </div>`,
    styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
    constructor() { }
}
