import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'
import { ApiService } from 'src/app/core/api.service'
import { SettingService } from 'src/app/core/setting.service'
import { withDarkMode } from 'src/app/mixins/withDarkMode'

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent extends withDarkMode() implements OnInit {
    @Input() value: string

    constructor(
        private apiService: ApiService,
        private router: Router,
        private settingService: SettingService) {
        super(settingService)
    }

    ngOnInit(): void {
    }

    search() {
        this.apiService.getDetail(this.value)
            .then(res => this.router.navigate(['/detail', this.value]))
            .catch(() => this.router.navigate(['notFound']))
    }
}
