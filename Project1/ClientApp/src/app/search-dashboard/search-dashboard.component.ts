import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Article } from '../models/article';
import { SearchCondition } from '../models/searchCondition';
import { SearchService } from '../Services/search.service';

@Component({
  selector: 'app-search-dashboard',
  templateUrl: './search-dashboard.component.html',
  styleUrls: ['./search-dashboard.component.css']
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchDashboardComponent implements OnInit {

  articles: Article[] | undefined;
  searchCondition: SearchCondition | undefined;
  constructor(private articleService: SearchService) { }

  ngOnInit(): void {
  }

  onemitSearchCondition(formGroup: FormGroup): void {
    this.searchCondition = {
      searchTerm: formGroup.get('searchTerm')?.value, music: formGroup.get('music')?.value,
      sport: formGroup.get('sport')?.value, checkCategories: formGroup.get('checkCategories')?.value, female: formGroup.get('female')?.value, male: formGroup.get('male')?.value, checkGroups: formGroup.get('checkGroups')?.value, period: formGroup.get('period')?.value, termMatch: formGroup.get('termMatch')?.value
    };
    if (this.searchCondition.termMatch == 'match exactly') {
      this.articleService.findExactMatches(this.searchCondition).subscribe(articles => this.articles = articles);
    }
    else if (this.searchCondition.termMatch == 'allow fusion') {
      this.articleService.findFusionMatches(this.searchCondition).subscribe(articles => this.articles = articles);
    }
  }


}
