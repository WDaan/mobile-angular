import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'
import { ApiService } from 'src/app/core/api.service'

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    @Input() value: string

    constructor(private apiService: ApiService, private router: Router) { }

    ngOnInit(): void {
    }

    search() {
        this.apiService.getDetail(this.value)
            .then(res => this.router.navigate(['/detail', this.value]))
            .catch(() => this.router.navigate(['notFound']))
    }
}
