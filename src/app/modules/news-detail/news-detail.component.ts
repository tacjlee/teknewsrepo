import { Component, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticleType } from '@interfaces/article-type';
import { HackerDataService } from "@services/hacker-data.service";
import { Subscription } from "rxjs";


@Component({
	selector: 'news-detail',
	templateUrl: './news-detail.component.html',
	styleUrls: ["./news-detail.component.scss"],
})
export class NewsDetailComponent implements OnDestroy {

	item: ArticleType = undefined;
	subLoadDetailData: Subscription;

	constructor(
        private hackerDataService: HackerDataService,
		private route: ActivatedRoute
    ) { 
		const id = this.route.snapshot.paramMap.get('id');
		this.subLoadDetailData = this.hackerDataService.getDetailArticle(id)
		.subscribe(res=>{
			if(!res.data) return;
			this.item = res.data.article;
		})
	}

	ngOnDestroy(): void {
		if(this.subLoadDetailData){
			this.subLoadDetailData.unsubscribe();
		}
	}

}
