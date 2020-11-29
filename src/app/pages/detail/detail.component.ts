import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { ApiService } from 'src/app/core/api.service'
import { SettingService } from 'src/app/core/setting.service'
import { withDarkMode } from 'src/app/mixins/withDarkMode'

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent extends withDarkMode() implements OnInit {

    id: string
    item: any
    showStats: boolean

    constructor(
        private route: ActivatedRoute,
        private apiService: ApiService,
        private settingsService: SettingService,
        private router: Router) {
        super(settingsService)
        this.settingsService.getShowStats().subscribe(newShowStats => {
            this.showStats = newShowStats
        })
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(
            (params: ParamMap) => {
                this.id = params.get('id')
                this.fetchDetail()
            }
        )

    }

    fetchDetail(): void {
        this.apiService.getDetail(this.id)
            .then(res => this.item = res)
            .catch(() => this.router.navigate(['notFound']))
    }

    getColor(type: string): string {
        switch (type) {
            case 'grass':
                return 'bg-green-300'
            case 'bug':
                return 'bg-gray-400'
            case 'electric':
                return 'bg-yellow-300'
            case 'poison':
                return 'bg-purple-300'
            case 'fire':
                return 'bg-red-500'
            case 'flying':
                return 'bg-blue-200'
            case 'water':
                return 'bg-blue-400'
            case 'psychic':
                return 'bg-indigo-400'
            case 'dragon':
                return 'bg-indigo-600'
            case 'fairy':
                return 'bg-pink-300'
            case 'ground':
                return 'bg-yellow-700'
            case 'ice':
                return 'bg-blue-300'
            default:
                return 'bg-gray-200'
        }
    }
}
