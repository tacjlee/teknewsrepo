import { Component, OnDestroy, OnInit} from "@angular/core";
import { ArticleType } from "@interfaces/article-type";
import { AlertService } from "@services/alert.service";
import { HackerDataService } from "@services/hacker-data.service";
import { Subscription } from "rxjs";

@Component({
    selector: "home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
    constructor(
        private alertService: AlertService,
        private hackerDataService: HackerDataService,
    ) { }
    
    pageIndex:number = 0;
    pageSize:number = 0;
    isFinished: boolean = false;
    hackerNews: ArticleType[] =[];

    subLoadData: Subscription;
    subInitData: Subscription;
    subLoadDetailData: Subscription;
    ngOnInit(): void {
        this.onLoadData(this.pageIndex);
    }

    loadMoreData(){
        if(!this.isFinished){
            this.pageIndex += 1;
            this.onLoadData(this.pageIndex);
        }
    }

    onLoadData(pageIndex: number){
        this.subLoadData = this.hackerDataService.getArticles(pageIndex)
        .subscribe(res=>{
            const data: any = res.data;
            if(!data || !data.articles) return;
            if(this.pageSize ===0){
                this.pageSize = data.articles.length;
            }
            this.isFinished = this.pageSize !== data.articles.length;
            for(let i=0; i< data.articles.length; i++){
                const item = data.articles[i];
                this.hackerNews.push(item);

                //API not return url, so we try to get it out from detail
                const url = item.url;
                if(!url){
                    const articalDetailUrl = item.subtitle;
                    this.subLoadDetailData = this.hackerDataService.getDetailArticle(articalDetailUrl)
                    .subscribe(res=>{
                        const data:any = res.data;
                        if(!data || !data.article) return;
                        const article: ArticleType = data.article;
                        item.url = article.coverImageUrl;
                    })
                }
            }
        },
        err=>{
            this.alertService.showError('Could not load Hacker News')
        })
    }

    ngOnDestroy(): void {
        if(this.subInitData){
            this.subInitData.unsubscribe();
        }
        if(this.subLoadData){
            this.subLoadData.unsubscribe();
        }
        if(this.subLoadDetailData){
           this.subLoadDetailData.unsubscribe();
        }
    }

}
