import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ApiService } from 'src/app/core/api.service'

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    id: string
    item: any

    constructor(private route: ActivatedRoute, private apiService: ApiService) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id')
        this.fetchDetail()
    }

    fetchDetail() {
        this.apiService.getDetail(this.id).then(res => {
            this.item = res
        }
        )
    }

    getColor(type: string) {
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
                return 'bg-yellow-500'
            case 'flying':
                return 'bg-blue-200'
            case 'water':
                return 'bg-blue-400'
            case 'psychic':
                return 'bg-indigo-400'
            case 'dragon':
                return 'bg-indigo-600'
            default:
                return 'bg-gray-200'
        }
    }
}
