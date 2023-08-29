import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { Article } from '../models/article';
import { SearchCondition } from '../models/searchCondition';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }

  findExactMatches(searchCondition: SearchCondition): Observable<Article[]> {
    var condition = this.findCondition(searchCondition);
    if (searchCondition.music != '' && searchCondition.sport != '') {
      return this.http.get<Article[]>('api/Articles/FindMusicSportExactMatches/' + condition);
    }
    else if (searchCondition.music != '' && searchCondition.sport == '') {
      return this.http.get<Article[]>('api/Articles/FindMusicExactMatches/' + condition);
    }
    /*else if (searchCondition.music == '' && searchCondition.sport != '') {
      return this.http.get<Article[]>('api/Articles/FindSportExactMatches/' + condition);
    }*/
    return this.http.get<Article[]>('api/Articles/FindSportExactMatches/' + condition);
  }

  findFusionMatches(searchCondition: SearchCondition): Observable<Article[]> {
    let condition = this.findCondition(searchCondition);
    if (searchCondition.music != null && searchCondition.sport != null) {
      return this.http.get<Article[]>('api/Articles/FindMusicSportFusionMatches/' + condition);
    }
    else if (searchCondition.music != null && searchCondition.sport == null) {
      return this.http.get<Article[]>('api/Articles/FindMusicFusionMatches/' + condition);
    }
    /*else if (searchCondition.music == null && searchCondition.sport != null) {
      return this.http.get<Article[]>('api/Articles/FindSportFusionMatches/' + condition);
    }*/
    return this.http.get<Article[]>('api/Articles/FindSportFusionMatches/' + condition);
  }

  findCondition(searchCondition: SearchCondition) {
    if (searchCondition.female == '') {
      searchCondition.female = "undefined";
    }
    if (searchCondition.male == '') {
      searchCondition.male = "undefined";
    }

    let condition = searchCondition.female + "/" + searchCondition.male + "/" + searchCondition.period + "/" + searchCondition.searchTerm;
    return condition;
  }
}
