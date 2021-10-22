import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable} from 'rxjs';
import { ArticleType } from '@interfaces/article-type';

@Injectable({ providedIn: 'root' })
export class HackerDataService {
	selectedArticle: ArticleType = undefined;
    HACKER_NEWS_URL: string = "https://iwa-test.herokuapp.com/graphql";

    setArticle(item: ArticleType){
        this.selectedArticle = item;
    }
    getArticle(){
        return this.selectedArticle;
    }
    
    constructor(private httpClient: HttpClient ) { 

    }

	getArticles(pageNumber: number =0): Observable<any>{
        const data = {query: "{ articles(pageNumber:" + pageNumber +") { content, coverImageUrl, description, subtitle, title, url }}"}
        return this.httpClient.post(this.HACKER_NEWS_URL, data);
    }
	
    getDetailArticle(url: string): Observable<any>{
        const hackerActicleDetailUrl = "https://iwa-test.herokuapp.com/graphql";
        const data = {query: "{ article(url: \""+ url +"\" ){ content, coverImageUrl, description, subtitle, title, url  }}"}
        return this.httpClient.post(this.HACKER_NEWS_URL, data);
    }



}
